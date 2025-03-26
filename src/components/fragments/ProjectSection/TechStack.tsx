import React from "react";

interface TechStackProps {
  name: string;
}

const TechStack = ({ name }: TechStackProps) => {
  return (
    <div className="text-center xl:px-4 px-3 py-4 rounded-[30px] dark:bg-[#1D1D1D] bg-[#CCCCCC]">
      <p className="text-primary 2xl:text-base text-sm">{name}</p>
    </div>
  );
};

export default TechStack;
