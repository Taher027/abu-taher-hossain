import type { TProject } from "@data/ProjectData";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: TProject;
  index: number;
};

const MAX_TECH = 3;

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const frontend = project.techStack.frontend as string[];
  const visibleTech = frontend.slice(0, MAX_TECH);
  const extra = frontend.length - visibleTech.length;

  return (
    <div
      className="h-full"
      data-aos="fade-up"
      data-aos-delay={`${(index % 2) * 100 + 100}`}
    >
      <Link
        href={`/project/${project.id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/70 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-accent/40 hover:shadow-xl hover:shadow-sky-accent/10"
      >
        {/* Top glow line, hover e ashe */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 h-px bg-linear-to-r from-transparent via-sky-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={340}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-80" />

          {/* Badges */}
          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-midnight/70 px-3 py-1 text-xs font-medium text-primary-text backdrop-blur">
            {project.year}
          </span>
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-midnight/70 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {project.status}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-accent">
            {project.category}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary-heading transition-colors duration-300 group-hover:text-sky-accent">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-secondary-text">{project.subtitle}</p>

          <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-body-text">
            {project.overview}
          </p>

          {/* Tech chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-electric/30 bg-electric/10 px-2.5 py-1 text-xs font-medium text-body-text"
              >
                {tech}
              </span>
            ))}
            {extra > 0 && (
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-secondary-text">
                +{extra}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-secondary-text">
              <Sparkles size={14} className="text-sky-accent" />
              {project.highlights[0]}
            </span>

            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-body-text transition-colors duration-300 group-hover:text-sky-accent">
              View Details
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
