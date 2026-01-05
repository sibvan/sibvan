import { gsap } from "./gsap-setup";

export const titleAnimation = (title: HTMLElement) => {
  gsap.fromTo(
    title,
    { top: -24, opacity: 0 },
    {
      opacity: 1,
      top: 0,
      duration: 0.6,
      ease: "back.inOut(1)",
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    },
  );
};
