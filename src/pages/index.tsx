// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/fragments/Footer";
import HeroSection from "@/components/fragments/HeroSection";
import Navbar from "@/components/fragments/Navbar";
import ProjectSection from "@/components/fragments/ProjectSection";
import SkillSection from "@/components/fragments/SkillSection";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div className="relative 2xl:px-[120px] xl:px-[100px] px-8 container flex flex-col gap-10">
      <Navbar />
      <div className="flex flex-col gap-y-48 max-w-[1200px] ">
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <Footer/>
      </div>
    </div>
  );
}
