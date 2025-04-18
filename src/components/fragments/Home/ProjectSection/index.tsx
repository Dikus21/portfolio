import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectDTO } from "@/models/dto/ProjectDTO";
import Link from "next/link";
import { motion } from "framer-motion";

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
          Here are a few past design projects I&apos;ve worked on
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
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex justify-end w-full"
      >
        <Link
          href="/projects"
          className="flex flex-row gap-2 items-center group"
        >
          <span className="text-2xl font-semibold text-subtitle transition-transform duration-200 group-hover:translate-x-1">
            View More
          </span>
          <motion.svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
            whileHover={{ x: 4 }}
          >
            <path
              d="M6.04175 14.5001H22.9584M22.9584 14.5001L14.5001 6.04175M22.9584 14.5001L14.5001 22.9584"
              stroke="#A5A5A5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
