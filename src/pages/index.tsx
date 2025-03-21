// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import HeroSection from "@/components/fragments/HeroSection";
import Navbar from "@/components/fragments/Navbar";

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
    <div className="relative 2xl:px-[120px] xl:px-[100px] px-8">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}
