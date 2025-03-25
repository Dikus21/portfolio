import React from "react";

interface TechStackProps {
  name: string;
}

const TechStack = ({ name }: TechStackProps) => {
  return (
    <div className="text-center px-4 py-4 rounded-[30px] dark:bg-[#1D1D1D] bg-[#CCCCCC]">
      <p className="text-primary">{name}</p>
    </div>
  );
};

export default TechStack;
