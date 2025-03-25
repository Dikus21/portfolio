import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 py-4 lg:py-8 w-full dark:bg-black dark:bg-opacity-95 bg-white bg-opacity-95 z-50">
      <div className="relative flex justify-between w-full">
        {/* Menu Button (Mobile) */}
        <button
          className={`lg:hidden p-2 focus:outline-none flex w-full justify-start ${
            menuOpen ? "opacity-0" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="30px"
            height="30px"
            className="fill-primary"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
          </svg>
        </button>

        {/* Side Navbar (Mobile) */}
        <div
          ref={menuRef}
          className={`lg:hidden fixed top-0 left-0 h-screen w-60 bg-background z-40 transition-transform duration-400 ease-in-out transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="pl-4 pb-8 pt-8 focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
              className="fill-primary"
            >
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
          </button>
          <div className="flex flex-col items-start gap-3 pl-6 text-lg">
            <span className="text-transparent bg-clip-text bg-title-gradient cursor-pointer">
              Home
            </span>
            <span className="text-[#696F79] opacity-55 cursor-pointer">
              About
            </span>
            <span className="text-[#696F79] opacity-55 cursor-pointer">
              Project
            </span>
            <span className="text-[#696F79] opacity-55 cursor-pointer">
              Contact
            </span>
          </div>
        </div>

        {/* Navbar Links */}
        <div
          className={`lg:flex hidden flex-row items-start lg:gap-10 gap-2 text-lg`}
        >
          <span className="lg:inline-block text-transparent bg-clip-text bg-title-gradient cursor-pointer">
            Home
          </span>
          <span className="lg:inline-block text-[#696F79] opacity-55 cursor-pointer">
            About
          </span>
          <span className="lg:inline-block text-[#696F79] opacity-55 cursor-pointer">
            Project
          </span>
          <span className="lg:inline-block text-[#696F79] opacity-55 cursor-pointer">
            Contact
          </span>
        </div>
        {/* Theme Toggle Button */}
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <Image src="/moon.svg" alt="dark mode" width={30} height={30} />
          ) : (
            <Image src="/sun.svg" alt="light mode" width={30} height={30} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
