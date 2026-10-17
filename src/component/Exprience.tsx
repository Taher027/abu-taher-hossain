import { BriefcaseBusiness, CalendarClock, Code2, Users } from "lucide-react";
import SectionHead from "./SectionHead";
import SectionTitle from "./SectionTitle";

const responsibilities = [
  {
    icon: Code2,
    text: "Developed and customized WordPress websites based on project requirements.",
  },
  {
    icon: BriefcaseBusiness,
    text: "Worked with Elementor to build responsive pages and website layouts.",
  },
  {
    icon: Users,
    text: "Collaborated with team members to implement designs and deliver website features.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="lg:mb-10 md:mb-12 mb-10">
      <SectionTitle Icon={BriefcaseBusiness} text="Experience" />
      <SectionHead>
        My Work{" "}
        <span className="bg-linear-to-r from-sky-accent to-electric bg-clip-text text-transparent">
          Experience
        </span>
      </SectionHead>

      <div className="relative ml-3 border-l border-sky-accent/30 pl-6">
        <div className="relative rounded-2xl border border-white/10 bg-surface/70 p-5 transition-colors duration-300 hover:border-sky-accent/40 md:p-7">
          {/* Timeline indicator */}
          <div className="absolute -left-8.25 top-7 h-3 w-3 rounded-full border-2 border-sky-accent bg-midnight" />

          {/* Header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-xl font-semibold text-primary-text md:text-2xl">
                WordPress Developer
              </h3>

              <p className="mt-2 text-sky-accent">Team-Based Experience</p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full border border-sky-accent/20 bg-sky-accent/10 px-3 py-1.5 text-sm text-sky-accent">
              <CalendarClock size={16} />
              <span>~1 Year</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 leading-7 text-slate-300">
            Gained practical experience working with WordPress in a team
            environment, contributing to website development, customization, and
            responsive UI implementation.
          </p>

          {/* Responsibilities */}
          <h4 className="mt-6 mb-4 font-medium text-primary-text">
            Key Responsibilities
          </h4>

          <ul className="space-y-4">
            {responsibilities.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex items-start gap-3">
                  <Icon size={19} className="mt-1 shrink-0 text-sky-accent" />

                  <span className="leading-7 text-secondary-text">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
