import { gsap } from "./gsap-setup";

export const langAnimation = (chart: HTMLElement) => {
  const cols = Array.from(chart.children);
  cols.forEach((col, id) => {
    const height = `${(100 / 3) * (id + 1)}%`;
    gsap.fromTo(
      col,
      { height: 16 },
      {
        height: height,
        duration: 0.6,
        ease: "back.inOut(1)",
        scrollTrigger: {
          trigger: col,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      },
    );
  });
};

export const ageAnimation = (age: HTMLElement) => {
  gsap.fromTo(
    age,
    { right: -24, opacity: 0 },
    {
      opacity: 0.2,
      right: 0,
      duration: 0.6,
      ease: "back.inOut(1)",
      scrollTrigger: {
        trigger: age,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    },
  );
};
