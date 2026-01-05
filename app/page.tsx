import { cms } from "@/cms";
import { Job } from "@/cms";
import { Project } from "@/cms";
import { Stack } from "@/cms";

import HeroSection from "@/components/sections/HeroSection";
import JobsSection from "@/components/sections/JobsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StacksSection from "@/components/sections/StacksSection";
import FooterSection from "@/components/sections/FooterSection";

export default async function Home() {
  const socials = [
    {
      alt: "LinkedIn",
      src: "/footer/linkedin.svg",
      bg: "#007EBB",
      href: "https://www.linkedin.com/in/sibvan/",
    },
    {
      alt: "Instagram",
      src: "/footer/instagram.svg",
      bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      href: "https://www.instagram.com/siberian_vanya/",
    },
    {
      alt: "Telegram",
      src: "/footer/telegram.svg",
      bg: "linear-gradient(180deg, #2AABEE 0%, #229ED9 99.21%)",
      href: "https://t.me/siberian_vanya",
    },
    { alt: "HeadHunter", src: "/footer/hh.svg", bg: "#e1011c", href: "https://hh.ru/resume/a915d232ff0f1102890039ed1f4d346c61736b" },
    { alt: "Хабр Карьера", src: "/footer/habr.svg", bg: "#6274BC", href: "https://career.habr.com/sibvan" },
    { alt: "GitHub", src: "/footer/github.svg", bg: "#1B1F23", href: "https://github.com/sibvan" },
  ];

  const jobs = await cms.find({ type: Job });
  const projects = await cms.find({ type: Project });
  const stacks = await cms.find({ type: Stack });

  const getCurrentAge = () => {
    const now = new Date();
    let age = now.getFullYear() - 1993;

    if (now < new Date(now.getFullYear(), 10, 26)) {
      age--;
    }

    return age;
  };

  return (
    <div className="mx-auto flex max-w-[1536px] min-w-[320px] flex-col gap-[calc(100px*8/24)] px-3 pt-[calc(200px*8/24)] pb-[calc(300px*8/24)] md:gap-[calc(100px*16/24)] md:pt-[calc(200px*16/24)] md:pb-[calc(300px*16/24)] xl:gap-[100px] xl:pt-[200px] xl:pb-[300px]">
      <HeroSection age={getCurrentAge()} />
      <JobsSection jobsList={jobs} />
      <ProjectsSection projectsList={projects} />
      <StacksSection stacksList={stacks} />
      <FooterSection socialsList={socials} />
    </div>
  );
}
