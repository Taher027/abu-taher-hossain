import type { ReactNode } from "react";

const SectionHead = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="lg:text-4xl md:text-3xl  lg:leading-15 md:leading-11 leading-9 mt-5 mb-4 max-w-170 font-semibold text-primary-heading">
      {children}
    </h2>
  );
};

export default SectionHead;
