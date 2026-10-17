import { projects } from "@data/ProjectData";
import { Folder } from "lucide-react";
import ProjectCard from "./ProjectCard";
import SectionHead from "./SectionHead";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="mb-16 md:mb-20 lg:mb-20">
      <SectionTitle Icon={Folder} text="My Projects" />
      <SectionHead>
        My{" "}
        <span className="bg-linear-to-r from-sky-accent to-electric bg-clip-text text-transparent">
          Projects
        </span>
      </SectionHead>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
