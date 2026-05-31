import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

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
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="rounded-xl border w-11/12 mx-auto max-w-4xl border-neutral-400 bg-neutral-800 p-6 my-5">

      <h3
        className="mb-2 text-2xl font-semibold cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </h3>

      <div className="flex flex-wrap mb-2 gap-2">
        {Array.isArray(keywords) &&
          keywords.map((tech) => (
            <span className="rounded-md bg-neutral-600 px-2 py-1 text-sm mx-1" key={tech}>
              {tech}
            </span>
          ))
        }
      </div>

      <ul className={`list-disc pl-5 mb-2 overflow-hidden transition-all duration-300 ${expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        {Array.isArray(bullet_points) &&
          bullet_points.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))
        }
      </ul>

      <div className="flex">
        <button
          onClick={() => setExpanded(!expanded)}
          className="mr-5"
        >
          <BiChevronDown
            className={`h-8 w-8 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <div className="flex gap-6">
          {github && (
            <a target="_blank" rel="noopener noreferrer" className="flex rounded-l items-center text-neutral-400 hover:text-white rounded-md border px-3 py-1" href={github}>
              Source
            </a>
          )}

          {route && (
            <a className="flex rounded-l items-center text-neutral-400 hover:text-white rounded-md border px-3 py-1">
              Info
            </a>
          )}

          {demo && (
            <a target="_blank" rel="noopener noreferrer" className="flex rounded-l items-center text-neutral-400 hover:text-white rounded-md border px-3 py-1" href={demo}>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
