import Link from "next/link";
import { GitHubButton } from "./Button";
import TechChip from "./Chips";

type Project = {
  title: string;
  tagline: string;
  category: string;
  focus: string[];
  keyHighlights: string[];
  architecture: string;
  technologies: string[];
  links: {
    github: string;
    live: string;
    caseStudy: string;
  };
};

export function ProjectCardFeatured({ project }: { project: Project }) {
  return (
    <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:shadow-xl transition-all duration-300">
      <span className="text-xs text-indigo-400 uppercase tracking-wider">
        {project.category}
      </span>
      <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
      <p className="text-gray-400 mt-3 max-w-2xl">{project.tagline}</p>
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">
          System Highlights
        </h4>
        <ul className="space-y-2">
          {project.keyHighlights.map((point, i) => (
            <li key={i} className="text-sm text-gray-400">
              • {point}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        <span className="text-gray-300 font-medium">Architecture:</span>{" "}
        {project.architecture}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech, i) => (
          <TechChip key={i} label={tech} />
        ))}
      </div>
      <div className="mt-6 flex gap-4 items-center">
        <GitHubButton href={project.links.github} />
        <Link
          href={project.links.caseStudy}
          className="text-sm hover:text-indigo-400"
        >
          Case Study →
        </Link>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 flex flex-col justify-around rounded-xl border border-zinc-800 bg-zinc-900/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

      <span className="text-xs text-indigo-400 uppercase">
        {project.category}
      </span>
      <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
      <p className="text-sm text-gray-400 mt-2">{project.tagline}</p>
      <ul className="mt-4 space-y-1">
        {project.keyHighlights.slice(0, 3).map((point, i) => (
          <li key={i} className="text-xs text-gray-500">
            • {point}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-gray-500">
        <span className="text-gray-300">Architecture:</span>{" "}
        {project.architecture}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech, i) => (
          <TechChip key={i} label={tech} />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 text-xs">
        <Link href={project.links.github} className="bg-zinc-900 p-2 border rounded-md border-zinc-700 flex items-center justify-center hover:border-zinc-400 ">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-zinc-400"
            fill="currentColor"
          >
            <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297 12 0.297Z" />
          </svg>
        </Link>
        <Link href={project.links.caseStudy} className="hover:text-indigo-400">
          Details →
        </Link>
      </div>
    </div>
  );
}
