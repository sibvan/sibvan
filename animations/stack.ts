import { gsap } from "./gsap-setup";

export const stackAnimation = (stack: HTMLElement) => {
  const imgs = stack.querySelectorAll("img");

  imgs.forEach((img) => {
    gsap.fromTo(
      img,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: "back.inOut(1)",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      },
    );
  });
};
