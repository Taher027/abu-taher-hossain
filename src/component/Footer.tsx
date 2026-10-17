import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-6 pb-4">
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-secondary-text sm:flex-row">
        <p>
          © {new Date().getFullYear()} Abu Taher Hossain. All rights reserved.
        </p>

        <a
          href="#about"
          className="group inline-flex items-center gap-1.5 transition-colors hover:text-sky-accent"
        >
          Back to top
          <ArrowUp
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
