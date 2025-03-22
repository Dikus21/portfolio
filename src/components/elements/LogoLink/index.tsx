import React, { ReactNode } from "react";

interface LogoButtonProps {
  children: ReactNode;
  link: string;
  name?: string;
  logoClassName?:string
}

const LogoLink = ({ link, children, name, logoClassName }: LogoButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2.5">
      <div className={`flex items-center justify-center p-2 rounded-full dark:bg-[#1E1E26] bg-[#E3E3E3] ${logoClassName}`}>
        {children}
      </div>
      <div className="text-subtitle font-medium">{name}</div>
    </a>
  );
};

export default LogoLink;
