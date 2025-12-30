import { cms } from "@/cms";
import { ExpItem } from "@/cms";

import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";

export default async function Home() {
  const experience = await cms.find({ type: ExpItem });

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
      <Hero age={getCurrentAge()} />
      <Experience expList={experience} />
    </div>
  );
}
