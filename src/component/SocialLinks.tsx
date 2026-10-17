import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa";
import { GrFacebookOption, GrGithub, GrLinkedinOption } from "react-icons/gr";

type Social = {
  name: string;
  href: string;
  icon: IconType;
};

const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/Taher027",
    icon: GrGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/taher027/",
    icon: GrLinkedinOption,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/abutaher.hossain.368/",
    icon: GrFacebookOption,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801956156665/",
    icon: FaWhatsapp,
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-3">
      {socials.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <a
            target="_blank"
            rel="noreferrer"
            href={href}
            aria-label={name}
            className="flex items-center justify-center rounded-md border-2 border-sky-accent p-2 text-sky-accent transition duration-300 hover:bg-sky-accent hover:text-white"
          >
            <Icon size={12} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
