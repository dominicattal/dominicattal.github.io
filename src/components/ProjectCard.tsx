type ProjectCardProps = {
  title: string;
  bullet_points: string[];
  keywords: string[];
  demo: string;
  route: string;
  github: string;
};

export default function ProjectCard({
  title,
  bullet_points,
  keywords,
  demo,
  route,
  github,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-neutral-400 p-6">

      <h3 className="mb-2 text-xl font-semibold">
        {title}
      </h3>

      <pre>
        {Array.isArray(keywords) &&
          keywords.map((tech, index) => (
            <span key={tech}>
              {tech}{index < keywords.length - 1 ? " | " : ""}
            </span>
          ))
        }
      </pre>

      {Array.isArray(bullet_points) &&
        bullet_points.map((point) => (
          <p>
            {point}
          </p>
        ))
      }

      <div className="flex gap-4">
        {route && (
          <a href={route}>
            Info
          </a>
        )}

        {github && (
          <a href={github}>
            Github
          </a>
        )}

        {demo && (
          <a href={demo}>
            Demo
          </a>
        )}
      </div>
    </div>
  )
}
