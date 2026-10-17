import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type TSectionTitile = {
  Icon: LucideIcon;
  text: string;
};
export type TNavItem = {
  icon: ReactNode;
  title: string;
  link: string;
};

export type TProjectItem = {
  id: string;
  title: string;
  image: string;
  short_description: string;
  link: string;
};
export type TSkill = {
  id: string;
  name: string;
  icon: string;
};

export type TSkillCategory = {
  _id: string;
  title: string;
  skills: TSkill[];
};
