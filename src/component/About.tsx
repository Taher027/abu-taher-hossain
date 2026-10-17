import {
  Database,
  Globe,
  Layout,
  type LucideIcon,
  Server,
  User,
} from "lucide-react";
import type { ReactNode } from "react";
import SectionHead from "./SectionHead";
import SectionTitle from "./SectionTitle";

type Focus = {
  icon: LucideIcon;
  title: string;
  tech: string;
  tone: string;
};

const focusAreas: Focus[] = [
  {
    icon: Layout,
    title: "Frontend",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
    tone: "from-sky-500/25 to-sky-500/5 text-sky-400 ring-sky-400/30",
  },
  {
    icon: Server,
    title: "Backend",
    tech: "Node.js, Express.js, REST APIs",
    tone: "from-violet-500/25 to-violet-500/5 text-violet-400 ring-violet-400/30",
  },
  {
    icon: Database,
    title: "Database",
    tech: "PostgreSQL, MongoDB, Prisma",
    tone: "from-emerald-500/25 to-emerald-500/5 text-emerald-400 ring-emerald-400/30",
  },
  {
    icon: Globe,
    title: "WordPress",
    tech: "Elementor, WooCommerce, Speed optimization",
    tone: "from-amber-500/25 to-amber-500/5 text-amber-400 ring-amber-400/30",
  },
];

const Hl = ({ children }: { children: ReactNode }) => (
  <span className="rounded-sm bg-sky-accent/10 px-1.5 py-0.5 font-semibold text-sky-accent [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
    {children}
  </span>
);

const AboutMe = () => {
  const props = {
    Icon: User,
    text: "About Me",
  };

  return (
    <section id="about" className="mt-15 mb-10 md:mb-12 lg:mb-10">
      <SectionTitle {...props} />

      <SectionHead>
        From Ideas to{" "}
        <span className="bg-linear-to-r from-sky-accent to-electric bg-clip-text text-transparent">
          Scalable Web Applications
        </span>
      </SectionHead>

      {/* Paragraph */}
      <p
        className="max-w-200 text-base leading-8 text-body-text"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        I&rsquo;m a <Hl>Full-Stack Web Developer</Hl> with hands-on{" "}
        <Hl>WordPress and modern web app</Hl> experience. I build fast,
        responsive products with React, Next.js, and TypeScript, backed by
        Node.js and PostgreSQL. Looking to grow with a professional development
        team.
      </p>

      {/* Focus areas */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {focusAreas.map(({ icon: Icon, title, tech, tone }, index) => (
          <div
            key={title}
            data-aos="fade-up"
            data-aos-delay={`${(index % 2) * 100 + 150}`}
          >
            <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-surface/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-accent/40 hover:shadow-lg hover:shadow-sky-accent/10">
              <span
                className={`grid size-11 shrink-0 place-items-center rounded-xl bg-linear-to-br ring-1 transition-transform duration-300 group-hover:scale-110 ${tone}`}
              >
                <Icon size={20} />
              </span>

              <div className="min-w-0">
                <h3 className="text-base font-semibold text-primary-text">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  {tech}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
