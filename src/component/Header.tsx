"use client";

import {
  AppWindow,
  AtSign,
  BriefcaseBusiness,
  CodeXml,
  Folder,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { TNavItem } from "..";

const navItems: TNavItem[] = [
  { icon: <User size={18} />, title: "About", link: "#about" },
  {
    icon: <BriefcaseBusiness size={18} />,
    title: "Experience",
    link: "#experience",
  },
  { icon: <Folder size={18} />, title: "Projects", link: "#projects" },
  { icon: <AppWindow size={18} />, title: "Services", link: "#services" },
  { icon: <CodeXml size={18} />, title: "Skills", link: "#skills" },
  { icon: <AtSign size={18} />, title: "Contact", link: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProjectPage = pathname.startsWith("/project");

  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    if (!isHome) return;

    const sections = navItems
      .map(({ link }) => document.querySelector(link))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    for (const section of sections) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, [isHome]);

  const current = isProjectPage ? "#projects" : active;

  return (
    <header className="pointer-events-none fixed inset-x-0 bottom-4 z-50 px-3 pb-[env(safe-area-inset-bottom)] lg:bottom-auto lg:top-4">
      <nav className="pointer-events-auto mx-auto flex w-fit items-center gap-1 rounded-full border border-white/10 bg-surface/70 p-1.5 shadow-lg shadow-electric/10 backdrop-blur-xl lg:gap-2 lg:p-2">
        {navItems.map(({ icon, title, link }) => {
          const isActive = current === link;
          return (
            <Link
              key={link}
              href={`/${link}`}
              onClick={() => setActive(link)}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 lg:px-5 ${isActive ? "bg-electric text-primary-text shadow-md shadow-electric/40" : "text-secondary-text hover:bg-white/5 hover:text-sky-accent"}`}
            >
              <span
                className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-primary-text" : "group-hover:text-sky-accent"}`}
              >
                {icon}
              </span>

              <span className="hidden sm:inline">{title}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
