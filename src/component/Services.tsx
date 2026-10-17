import { AppWindow } from "lucide-react";
import type { IconType } from "react-icons";
import { BiLogoWordpress } from "react-icons/bi";
import { FiDatabase, FiShield } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { SiReact } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SectionHead from "./SectionHead";
import SectionTitle from "./SectionTitle";

type Tone = "sky" | "violet" | "emerald" | "amber" | "rose" | "cyan";

type Service = {
  id: number;
  service: string;
  details: string;
  icon: IconType;
  tone: Tone;
};

const tones: Record<
  Tone,
  {
    border: string;
    iconBox: string;
    glow: string;
    number: string;
    line: string;
    title: string;
  }
> = {
  sky: {
    border: "hover:border-sky-400/50 hover:shadow-sky-500/10",
    iconBox: "from-sky-500/25 to-sky-500/5 text-sky-400 ring-sky-400/30",
    glow: "bg-sky-500",
    number: "text-sky-400/15 group-hover:text-sky-400/30",
    line: "from-sky-400",
    title: "group-hover:text-sky-300",
  },
  violet: {
    border: "hover:border-violet-400/50 hover:shadow-violet-500/10",
    iconBox:
      "from-violet-500/25 to-violet-500/5 text-violet-400 ring-violet-400/30",
    glow: "bg-violet-500",
    number: "text-violet-400/15 group-hover:text-violet-400/30",
    line: "from-violet-400",
    title: "group-hover:text-violet-300",
  },
  emerald: {
    border: "hover:border-emerald-400/50 hover:shadow-emerald-500/10",
    iconBox:
      "from-emerald-500/25 to-emerald-500/5 text-emerald-400 ring-emerald-400/30",
    glow: "bg-emerald-500",
    number: "text-emerald-400/15 group-hover:text-emerald-400/30",
    line: "from-emerald-400",
    title: "group-hover:text-emerald-300",
  },
  amber: {
    border: "hover:border-amber-400/50 hover:shadow-amber-500/10",
    iconBox:
      "from-amber-500/25 to-amber-500/5 text-amber-400 ring-amber-400/30",
    glow: "bg-amber-500",
    number: "text-amber-400/15 group-hover:text-amber-400/30",
    line: "from-amber-400",
    title: "group-hover:text-amber-300",
  },
  rose: {
    border: "hover:border-rose-400/50 hover:shadow-rose-500/10",
    iconBox: "from-rose-500/25 to-rose-500/5 text-rose-400 ring-rose-400/30",
    glow: "bg-rose-500",
    number: "text-rose-400/15 group-hover:text-rose-400/30",
    line: "from-rose-400",
    title: "group-hover:text-rose-300",
  },
  cyan: {
    border: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
    iconBox: "from-cyan-500/25 to-cyan-500/5 text-cyan-400 ring-cyan-400/30",
    glow: "bg-cyan-500",
    number: "text-cyan-400/15 group-hover:text-cyan-400/30",
    line: "from-cyan-400",
    title: "group-hover:text-cyan-300",
  },
};

const services: Service[] = [
  {
    id: 1,
    service: "Frontend Web Development",
    details:
      "I turn Figma or PSD designs into clean, responsive web interfaces using React, Next.js, TypeScript, and Tailwind CSS that work well on every device.",
    icon: HiOutlineCode,
    tone: "sky",
  },
  {
    id: 2,
    service: "React & Next.js Applications",
    details:
      "I build fast, scalable applications with React and Next.js, using both the App Router and Pages Router, with type-safe code in TypeScript and form validation using Zod.",
    icon: SiReact,
    tone: "violet",
  },
  {
    id: 3,
    service: "Full Stack Development",
    details:
      "I build complete web applications end to end with Next.js, Node.js, Express, and TypeScript, from the user interface to REST APIs and database integration.",
    icon: TbBrandNextjs,
    tone: "emerald",
  },
  {
    id: 4,
    service: "Database Design & Integration",
    details:
      "I design and manage databases with PostgreSQL and Prisma ORM, and with MongoDB and Mongoose, focusing on clean schemas and reliable data handling.",
    icon: FiDatabase,
    tone: "amber",
  },
  {
    id: 5,
    service: "Authentication & Security",
    details:
      "I implement secure login systems using JWT, Google Auth, and Firebase Authentication, including protected routes and role-based access.",
    icon: FiShield,
    tone: "rose",
  },
  {
    id: 6,
    service: "WordPress & WooCommerce",
    details:
      "I build and customize WordPress and WooCommerce websites with Elementor, including theme and plugin customization and Google page speed optimization.",
    icon: BiLogoWordpress,
    tone: "cyan",
  },
];

const Services = () => {
  const props = {
    Icon: AppWindow,
    text: "Services",
  };

  return (
    <section id="services" className="mb-16 md:mb-20 lg:mb-20">
      <SectionTitle {...props} />
      <SectionHead>
        My{" "}
        <span className="bg-linear-to-r from-sky-accent to-electric bg-clip-text text-transparent">
          Specializations
        </span>
      </SectionHead>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {services.map(({ id, service, details, icon: Icon, tone }, index) => {
          const t = tones[tone];
          return (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={`${(index % 2) * 100 + 100}`}
            >
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl md:p-7 ${t.border}`}
              >
                {/* Corner glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-12 -top-12 size-40 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30 ${t.glow}`}
                />

                {/* Big serial number */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute right-5 top-3 text-6xl font-extrabold leading-none transition-colors duration-300 ${t.number}`}
                >
                  {String(id).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`relative grid size-14 place-items-center rounded-xl bg-linear-to-br ring-1 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${t.iconBox}`}
                >
                  <Icon className="text-3xl" />
                </div>

                {/* Text */}
                <div className="relative">
                  <h2
                    className={`mt-5 text-xl font-bold text-primary-text transition-colors duration-300 md:text-2xl ${t.title}`}
                  >
                    {service}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-body-text">
                    {details}
                  </p>
                </div>

                {/* Bottom line, hover e left theke right e barbe */}
                <div
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r to-transparent transition-all duration-500 group-hover:w-full ${t.line}`}
                />
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
