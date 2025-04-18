import Image from "next/image";
import React from "react";
import TechStack from "./TechStack";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  techStacks: [string];
  githubUrl: string;
}

const ProjectCard = ({
  name,
  description,
  techStacks,
  githubUrl,
  id,
}: ProjectCardProps) => {
  return (
    <section className="2xl:max-w-[610px] xl:max-w-[520px] max-w-[470px] flex flex-col gap-7 p-7 rounded-[20px] dark:bg-[#13131C] bg-[#F3F3F3] items-center">
      <div className="rounded-lg">
        <Image
          src={`/projects/${id}.png`}
          alt="simple bank preview"
          width={520}
          height={300}
          className="min-w-[200px] h-auto"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="lg:text-3xl text-2xl text-primary font-semibold">
          {name}
        </p>
        <p className="sm:text-xl text-textContent font-light sm:text-justify 2xl:h-[120px]">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-3 w-full">
        {techStacks.map((techStack) => (
          <TechStack key={id + techStack} name={techStack} />
        ))}
      </div>
      <div className="w-full flex ">
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-row gap-2.5 px-2.5 py-1.5 bg-primary w-[120px] rounded-md no-underline cursor-pointer group"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-background transition-transform duration-200 group-hover:scale-110"
          >
            <path d="M12.5 0C5.59688 0 0 5.68451 0 12.6957C0 18.6447 4.03333 23.6225 9.47083 25C9.4125 24.8286 9.375 24.6297 9.375 24.3832V22.2133C8.86771 22.2133 8.01771 22.2133 7.80417 22.2133C6.94896 22.2133 6.18854 21.8398 5.81979 21.1458C5.41042 20.3745 5.33958 19.1949 4.325 18.4733C4.02396 18.2332 4.25312 17.9592 4.6 17.9962C5.24062 18.1803 5.77187 18.6267 6.27187 19.289C6.76979 19.9524 7.00417 20.1026 7.93437 20.1026C8.38542 20.1026 9.06042 20.0762 9.69583 19.9746C10.0375 19.0933 10.6281 18.2818 11.35 17.8989C7.1875 17.464 5.20104 15.3608 5.20104 12.5053C5.20104 11.2759 5.71667 10.0868 6.59271 9.08485C6.30521 8.09035 5.94375 6.06221 6.70312 5.28989C8.57604 5.28989 9.70833 6.52349 9.98021 6.85675C10.9135 6.53195 11.9385 6.34786 13.0156 6.34786C14.0948 6.34786 15.124 6.53195 16.0594 6.85887C16.3281 6.52772 17.4615 5.28989 19.3385 5.28989C20.101 6.06327 19.7354 8.09987 19.4448 9.09226C20.3156 10.092 20.8281 11.278 20.8281 12.5053C20.8281 15.3587 18.8448 17.4609 14.6885 17.8978C15.8323 18.504 16.6667 20.2074 16.6667 21.4907V24.3832C16.6667 24.4932 16.6427 24.5726 16.6302 24.6667C21.501 22.9327 25 18.2353 25 12.6957C25 5.68451 19.4031 0 12.5 0Z" />
          </svg>
          <p className="text-background transition-transform duration-200 group-hover:translate-x-1">
            Source
          </p>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectCard;
