import { CodeXml } from "lucide-react";
import SectionHead from "./SectionHead";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillsCard";
import { SkillCategory as skills } from "./SkillsContent";

const Skills = () => {
  const props = {
    Icon: CodeXml,
    text: "My Skills",
  };

  return (
    <section id="skills" className="lg:mb-20 md:mb-20 mb-16">
      <SectionTitle {...props} />
      <SectionHead>
        My{" "}
        <span className="bg-linear-to-r from-sky-accent to-electric bg-clip-text text-transparent">
          Advantages
        </span>
      </SectionHead>
      <div className="grid grid-cols-1 gap-20">
        {skills?.map((items, index) => (
          <SkillCard key={items?._id} index={index} items={items}></SkillCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
