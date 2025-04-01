import Image from "next/image";
import React from "react";

interface SkillCardProps {
  accentColor: string;
  src: string;
  name: string;
  description: string;
}

const SkillCard = ({ name, description, src, accentColor }: SkillCardProps) => {
  return (
    <section className="w-full max-w-[310px] rounded-2xl dark:bg-[#13131C] bg-[#F3F3F3] flex flex-row gap-5 px-[10px] py-[15px] items-center">
      <div
        className={`p-[10px] w-[60px] h-[60px] rounded-md flex items-center justify-center`}
        style={{ backgroundColor: "#" + accentColor + "4D" }}
      >
        <Image src={`/skills/${src}`} alt={`${name} logo`} width={40} height={40} className="w-full min-w-[40px] h-auto" />
      </div>
      <div className="w-full flex flex-col">
        <p className="sm:text-xl text-lg text-primary">{name}</p>
        <p className="text-textContent font-extralight">
          {description}
        </p>
      </div>
    </section>
  );
};

export default SkillCard;
