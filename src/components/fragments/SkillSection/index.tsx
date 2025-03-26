import React from "react";
import SkillCard from "./SkillCard";
import { SkillDTO } from "@/models/dto/SkillDTO";

interface SkillSectionProps {
  skills: SkillDTO[];
}

const SkillSection = ({ skills }: SkillSectionProps) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-transparent bg-clip-text bg-title-gradient 2xl:text-5xl text-4xl font-medium">
          Tech Stack
        </p>
        <p className="text-xl text-subtitle font-medium">
          These are some of my main technologies
        </p>
      </div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-5">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            description={skill.description}
            accentColor={skill.baseColor}
            src={`${skill.id}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
