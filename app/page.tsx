import { cms } from "@/cms";
import { ExpItem } from "@/cms";

import Experience from "@/components/sections/Experience";

export default async function Home() {
  const experience = await cms.find({ type: ExpItem });
  return (
    <div className="">
      <Experience expList={experience} />
    </div>
  );
}
