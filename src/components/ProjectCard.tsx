type ProjectCardProps = {
  title: string;
  bullet_points: string[];
  keywords: string[];
  demo?: string;
  route?: string;
  github?: string;
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
    <div className="rounded-xl border border-neutral-400 bg-neutral-800 p-6 my-5">

      <h3 className="mb-2 text-2xl font-semibold">
        {title}
      </h3>

      <div className="flex mb-2">
        {Array.isArray(keywords) &&
          keywords.map((tech, index) => (
            <span className="rounded-md bg-neutral-600 px-2 py-1 text-sm mx-1" key={tech}>
              {tech}
            </span>
          ))
        }
      </div>

      <ul className="list-disc pl-5 mb-2">
        {Array.isArray(bullet_points) &&
          bullet_points.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))
        }
      </ul>

      <div className="flex gap-4">
        {route && (
          <a>
            Info
          </a>
        )}

        {github && (
          <a target="_blank" rel="noopener noreferrer" className="lex items-center gap-2 text-zinc-400 hover:text-white" href={github}>
            Github
          </a>
        )}

        {demo && (
          <a target="_blank" rel="noopener noreferrer" href={demo}>
            Demo
          </a>
        )}
      </div>
    </div>
  )
}
