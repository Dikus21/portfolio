import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface LogoButtonProps {
  children: ReactNode;
  link: string;
  name?: string;
  logoClassName?: string;
}

const LogoLink = ({ link, children, name, logoClassName }: LogoButtonProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-row items-center gap-2.5"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div
        className={`flex items-center justify-center p-2 rounded-full dark:bg-[#1E1E26] bg-[#E3E3E3] ${logoClassName}`}
      >
        {children}
      </div>
      {name && <div className="text-subtitle font-medium">{name}</div>}
    </motion.a>
  );
};

export default LogoLink;
