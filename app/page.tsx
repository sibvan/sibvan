import { cms } from "@/cms";
import { ExpItem } from "@/cms";

export default async function Home() {
  const experience = await cms.find({ type: ExpItem });
  return <div>123</div>;
}
