import type { Metadata } from "next";
import CardsCarousel from "../../components/pages/CardsCarousel";

export const metadata: Metadata = {
  title: "Анимация на GSAP",
  description: "Бесконечная карусель карточек",
};

export default function Page() {
  return <CardsCarousel />;
}
