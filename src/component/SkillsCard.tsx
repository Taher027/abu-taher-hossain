import Image from "next/image";
import type { IconType } from "react-icons";
import { BsServer } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { MdSettingsSuggest } from "react-icons/md";

type skills = {
  id: string;
  name: string;
  icon: string;
};
type items = {
  _id: string;
  title: string;
  skills: skills[];
};

type Tone = {
  iconBox: string;
  title: string;
  badge: string;
  line: string;
  tileHover: string;
  glow: string;
};

const tones: Tone[] = [
  {
    iconBox: "from-sky-500/25 to-sky-500/5 text-sky-400 ring-sky-400/30",
    title: "text-sky-400",
    badge: "border-sky-400/30 bg-sky-500/10 text-sky-300",
    line: "from-sky-400/50",
    tileHover: "hover:border-sky-400/50 hover:shadow-sky-500/15",
    glow: "bg-sky-500",
  },
  {
    iconBox:
      "from-violet-500/25 to-violet-500/5 text-violet-400 ring-violet-400/30",
    title: "text-violet-400",
    badge: "border-violet-400/30 bg-violet-500/10 text-violet-300",
    line: "from-violet-400/50",
    tileHover: "hover:border-violet-400/50 hover:shadow-violet-500/15",
    glow: "bg-violet-500",
  },
  {
    iconBox:
      "from-emerald-500/25 to-emerald-500/5 text-emerald-400 ring-emerald-400/30",
    title: "text-emerald-400",
    badge: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
    line: "from-emerald-400/50",
    tileHover: "hover:border-emerald-400/50 hover:shadow-emerald-500/15",
    glow: "bg-emerald-500",
  },
  {
    iconBox:
      "from-amber-500/25 to-amber-500/5 text-amber-400 ring-amber-400/30",
    title: "text-amber-400",
    badge: "border-amber-400/30 bg-amber-500/10 text-amber-300",
    line: "from-amber-400/50",
    tileHover: "hover:border-amber-400/50 hover:shadow-amber-500/15",
    glow: "bg-amber-500",
  },
];

const categoryIcons: IconType[] = [
  HiOutlineCode,
  FaServer,
  MdSettingsSuggest,
  BsServer,
];

const SkillCard = ({ items, index }: { items: items; index: number }) => {
  const { skills, title } = items;
  const tone = tones[index % tones.length];
  const CategoryIcon = categoryIcons[index % categoryIcons.length];

  return (
    <div>
      {/* Category header */}
      <div className="mb-6 flex items-center gap-4">
        <span
          className={`grid size-11 shrink-0 place-items-center rounded-xl bg-linear-to-br ring-1 ${tone.iconBox}`}
        >
          <CategoryIcon size={22} />
        </span>

        <h2 className={`text-xl font-bold md:text-2xl ${tone.title}`}>
          {title}
        </h2>

        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tone.badge}`}
        >
          {skills?.length ?? 0}
        </span>

        <div
          aria-hidden="true"
          className={`h-px flex-1 bg-linear-to-r to-transparent ${tone.line}`}
        />
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
        {skills?.map(({ icon, name, id }, i) => (
          <div
            key={id}
            data-aos="fade-up"
            data-aos-delay={`${(i % 6) * 80 + 100}`}
          >
            <article
              className={`group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-surface/70 px-2 py-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl md:py-5 ${tone.tileHover}`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-8 left-1/2 size-20 -translate-x-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 ${tone.glow}`}
              />

              <Image
                src={icon}
                alt={name}
                width={64}
                height={64}
                className="relative size-10 object-contain transition-transform duration-300 group-hover:scale-115 md:size-12"
              />

              <p className="relative px-1 text-center text-xs font-medium text-body-text transition-colors duration-300 group-hover:text-primary-text md:text-sm">
                {name}
              </p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
