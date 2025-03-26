import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectDTO } from "@/models/dto/ProjectDTO";

interface ProjectSectionProps {
  projects: ProjectDTO[];
}

const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-10 pb-40">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-transparent bg-clip-text bg-title-gradient 2xl:text-5xl text-4xl font-medium">
          Feature Projects
        </p>
        <p className="text-xl text-subtitle">
          Here are a few past design projects i’ve worked on
        </p>
      </div>
      <div className="flex flex-wrap lg:justify-between justify-center gap-y-10 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            techStacks={project.techStacks}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
      <div className="flex flex-row gap-2 items-center w-full justify-end">
        <span className="text-2xl font-semibold text-subtitle">View More</span>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.04175 14.5001H22.9584M22.9584 14.5001L14.5001 6.04175M22.9584 14.5001L14.5001 22.9584"
            stroke="#A5A5A5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProjectSection;
