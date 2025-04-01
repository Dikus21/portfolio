// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/fragments/Footer";
import HeroSection from "@/components/fragments/HeroSection";
import Navbar from "@/components/fragments/Navbar";
import ProjectSection from "@/components/fragments/ProjectSection";
import SkillSection from "@/components/fragments/SkillSection";
import { SkillDTO } from "@/models/dto/SkillDTO";
import skills from "@/data/skills.json";
import projects from "@/data/projects.json";
import { GetStaticProps } from "next";
import { ProjectDTO } from "@/models/dto/ProjectDTO";
import Head from "next/head";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

interface HomeProps {
  skills: SkillDTO[];
  projects: ProjectDTO[];
}

function Home({ skills, projects }: HomeProps) {
  return (
    <>
      <Head>
      <title>Andika Tirta | Full-Stack Developer</title>
        <meta
          name="description"
          content="Hi I'm Andika - a software developer from Jakarta. I like to develop full-stack application that are intuitive and easy to use."
        />
        <meta
          property="og:title"
          content="Meet Andika Tirta — Full-Stack Developer from Jakarta"
        />
        <meta
          property="og:description"
          content="I focus on building intuitive and reliable applications that feel simple and work smoothly — from front to back."
        />
        <meta
          name="google-site-verification"
          content="6RI2ZIcLiWTEr7tuQRKl8FVSXhTOY8NExurYV2yNEvs"
        />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/icon.ico"/>
      </Head>
      <div className="flex justify-center overflow-x-clip">
        <div className="relative 2xl:px-[120px] xl:px-[100px] px-8 container flex flex-col gap-10 ">
          <Navbar />
          <div className="flex flex-col gap-y-48">
            <HeroSection />
            <SkillSection skills={skills} />
            <ProjectSection projects={projects} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      skills,
      projects,
    },
  };
};

export default Home;
