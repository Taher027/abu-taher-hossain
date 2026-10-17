import type { TSectionTitile } from "..";

const SectionTitle = ({ Icon, text }: TSectionTitile) => {
  return (
    <div className="flex lg:pt-10 md:pt-10 pt-6 mb-10">
      <div className="flex items-center gap-2 rounded-full border border-sky-accent/50 bg-surface px-4 py-2 text-xs text-sky-accent transition-colors hover:border-sky-accent md:text-sm lg:px-5">
        <Icon size={18} />
        <span>{text}</span>
      </div>
    </div>
  );
};

export default SectionTitle;
