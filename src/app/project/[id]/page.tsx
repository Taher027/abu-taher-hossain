import { getProjectById, projects } from "@data/ProjectData";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers,
  Lightbulb,
  type LucideIcon,
  Rocket,
  Server,
  Sparkles,
  Target,
  TriangleAlert,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Sidebar from "@/component/Sidebar";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Abu Taher Hossain`,
    description: project.overview,
  };
}

/* ---------- Tone system (Tailwind e full class name lagey, tai static) ---------- */

type Tone = "sky" | "red" | "green" | "amber" | "violet";

const tones: Record<
  Tone,
  {
    border: string;
    glow: string;
    iconBox: string;
    title: string;
    bullet: string;
    chip: string;
  }
> = {
  sky: {
    border: "border-sky-accent/20 hover:border-sky-accent/40",
    glow: "from-sky-accent/70 via-sky-accent/10",
    iconBox: "bg-sky-accent/10 text-sky-accent ring-sky-accent/25",
    title: "text-sky-accent",
    bullet: "text-sky-accent",
    chip: "border-sky-accent/30 bg-sky-accent/10 text-sky-accent",
  },
  red: {
    border: "border-red-400/20 hover:border-red-400/40",
    glow: "from-red-500/70 via-red-500/10",
    iconBox: "bg-red-500/10 text-red-400 ring-red-400/25",
    title: "text-red-400",
    bullet: "text-red-400",
    chip: "border-red-400/30 bg-red-500/10 text-red-300",
  },
  green: {
    border: "border-emerald-400/20 hover:border-emerald-400/40",
    glow: "from-emerald-500/70 via-emerald-500/10",
    iconBox: "bg-emerald-500/10 text-emerald-400 ring-emerald-400/25",
    title: "text-emerald-400",
    bullet: "text-emerald-400",
    chip: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  },
  amber: {
    border: "border-amber-400/20 hover:border-amber-400/40",
    glow: "from-amber-500/70 via-amber-500/10",
    iconBox: "bg-amber-500/10 text-amber-400 ring-amber-400/25",
    title: "text-amber-400",
    bullet: "text-amber-400",
    chip: "border-amber-400/30 bg-amber-500/10 text-amber-300",
  },
  violet: {
    border: "border-violet-400/20 hover:border-violet-400/40",
    glow: "from-violet-500/70 via-violet-500/10",
    iconBox: "bg-violet-500/10 text-violet-400 ring-violet-400/25",
    title: "text-violet-400",
    bullet: "text-violet-400",
    chip: "border-violet-400/30 bg-violet-500/10 text-violet-300",
  },
};

const groupTone: Record<string, Tone> = {
  frontend: "sky",
  backend: "violet",
  payment: "amber",
  deployment: "green",
};

/* ---------- Small helpers ---------- */

const Card = ({
  icon: Icon,
  title,
  tone = "sky",
  children,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) => {
  const t = tones[tone];
  return (
    <section
      className={`group relative overflow-hidden rounded-2xl border bg-surface/60 p-5 transition-colors duration-300 sm:p-6 ${t.border} ${className}`}
    >
      {/* Top glow line */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent ${t.glow}`}
      />
      {/* Soft corner glow */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br to-transparent opacity-20 blur-2xl ${t.glow}`}
      />

      <h2
        className={`relative mb-5 flex items-center gap-3 text-lg font-semibold ${t.title}`}
      >
        <span
          className={`grid size-9 place-items-center rounded-lg ring-1 ${t.iconBox}`}
        >
          <Icon size={18} />
        </span>
        {title}
      </h2>

      <div className="relative">{children}</div>
    </section>
  );
};

const BulletList = ({
  items,
  tone = "sky",
}: {
  items: string[];
  tone?: Tone;
}) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li
        key={item}
        className="flex gap-3 text-[15px] leading-relaxed text-body-text"
      >
        <CheckCircle2
          size={18}
          className={`mt-0.5 shrink-0 ${tones[tone].bullet}`}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const btn =
  "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-300";

const formatStatLabel = (key: string) => key.replace(/([A-Z])/g, " $1");

/* ---------- Page ---------- */

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  const techGroups = Object.entries(project.techStack) as [string, string[]][];

  return (
    <div className="relative isolate min-h-screen bg-midnight">
      {/* Background glow */}
      <div className="pointer-events-none fixed -top-40 -right-40 -z-10 h-120 w-120 rounded-full bg-electric/15 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl lg:flex lg:items-start lg:gap-16 lg:px-10 mt-10">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content */}
        <main className="mt-10 min-w-0 flex-1 px-5 pb-28 lg:mt-0 lg:px-0 lg:py-16">
          {/* Back */}
          <Link
            href="/#projects"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-secondary-text transition-colors hover:text-sky-accent"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to projects
          </Link>

          {/* Header */}
          <header>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-sky-accent/30 bg-electric/20 px-3 py-1 text-xs font-medium text-sky-accent">
                {project.year}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                {project.status}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-secondary-text">
                {project.category}
              </span>
            </div>

            <h1 className="bg-linear-to-r from-white via-sky-accent to-electric bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-secondary-text sm:text-xl">
              {project.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className={`${btn} bg-linear-to-r from-electric to-sky-accent text-white shadow-lg shadow-electric/30 hover:scale-[1.03]`}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href={project.links.client}
                target="_blank"
                rel="noreferrer"
                className={`${btn} border border-white/15 bg-surface text-body-text hover:border-sky-accent hover:text-sky-accent`}
              >
                <Code2 size={16} /> Client Code
              </a>
              <a
                href={project.links.server}
                target="_blank"
                rel="noreferrer"
                className={`${btn} border border-white/15 bg-surface text-body-text hover:border-violet-400 hover:text-violet-300`}
              >
                <Server size={16} /> Server Code
              </a>
            </div>
          </header>

          {/* Cover image */}
          <div className="relative mt-10">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-electric/40 via-sky-accent/30 to-violet-500/30 opacity-60 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                width={1400}
                height={800}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-2 rounded-full border border-sky-accent/25 bg-surface px-4 py-1.5 text-sm font-medium text-sky-accent"
              >
                <Sparkles size={14} />
                {h}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-6">
            {/* Overview */}
            <Card icon={Sparkles} title="Overview" tone="sky">
              <p className="text-[15px] leading-7 text-body-text">
                {project.overview}
              </p>
            </Card>

            {/* Problem / Solution */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card icon={Target} title="Problem" tone="red">
                <p className="text-[15px] leading-7 text-body-text">
                  {project.problem}
                </p>
              </Card>
              <Card icon={Lightbulb} title="Solution" tone="green">
                <p className="text-[15px] leading-7 text-body-text">
                  {project.solution}
                </p>
              </Card>
            </div>

            {/* Stats */}
            <Card icon={Rocket} title="Quick Stats" tone="sky">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-xl border border-white/5 bg-midnight/60 p-4 transition-colors hover:border-sky-accent/30"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-wider text-secondary-text">
                      {formatStatLabel(key)}
                    </p>
                    <p className="mt-1.5 bg-linear-to-r from-sky-accent to-electric bg-clip-text text-xl font-bold text-transparent">
                      {typeof value === "boolean"
                        ? value
                          ? "Yes"
                          : "No"
                        : String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tech stack */}
            <Card icon={Layers} title="Tech Stack" tone="violet">
              <div className="space-y-6">
                {techGroups.map(([group, list]) => {
                  const t = tones[groupTone[group] ?? "sky"];
                  return (
                    <div key={group}>
                      <p
                        className={`mb-3 text-xs font-semibold uppercase tracking-widest ${t.title}`}
                      >
                        {group}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {list.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition hover:-translate-y-0.5 ${t.chip}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Features */}
            <Card icon={Sparkles} title="Key Features" tone="sky">
              <div className="grid gap-x-8 gap-y-3 md:grid-cols-2">
                {project.features.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-body-text"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-sky-accent"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Challenges + Learning */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card icon={TriangleAlert} title="Challenges" tone="amber">
                <BulletList items={project.challenges} tone="amber" />
              </Card>
              <Card icon={GraduationCap} title="What I Learned" tone="violet">
                <BulletList items={project.learning} tone="violet" />
              </Card>
            </div>

            {/* Future */}
            <Card icon={Rocket} title="Future Improvements" tone="green">
              <BulletList items={project.futureImprovements} tone="green" />
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
