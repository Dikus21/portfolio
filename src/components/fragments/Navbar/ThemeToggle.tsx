import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <Image src="/moon.svg" alt="dark mode" width={30} height={30} />
      ) : (
        <Image src="/sun.svg" alt="light mode" width={30} height={30} />
      )}
    </button>
  );
};

export default ThemeToggle;
