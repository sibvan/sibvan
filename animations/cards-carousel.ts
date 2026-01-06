import { gsap } from "./gsap-setup";

// vars

let cards: HTMLElement[];
let modal: HTMLElement;
let isPlaying = false;
let setResFn: (number: string) => void;
let nextStep = true;

// init carousel

export const initCarousel = (
  cardsBlock: HTMLElement,
  modalWindow: HTMLElement,
  setRes: (number: string) => void,
) => {
  cards = gsap.utils.toArray(cardsBlock.children);
  modal = modalWindow;
  setResFn = setRes;

  cards.forEach((card, id) => {
    gsap.set(card, { xPercent: id * 100 });
  });

  // addClasses();
  stepCarousel();
};

// carousel moving

const stepCarousel = () => {
  gsap.to(cards, {
    xPercent: "-=100",
    duration: 1,
    delay: 1,
    ease: "back.inOut(1)",
    onComplete: () => {
      if (nextStep) {
        stepCarousel();
      } else {
        wheelCarousel();
      }
    },
    modifiers: {
      xPercent: (x) => {
        return gsap.utils.wrap(-100, (cards.length - 1) * 100)(x);
      },
    },
  });
};

export const startWheel = () => {
  nextStep = false;
};

const wheelCarousel = () => {
  if (isPlaying) return;

  isPlaying = true;
  removeClasses();
  const shift = getRandomNumber(cards.length * 1000, cards.length * 2000);

  gsap.to(cards, {
    xPercent: `-=${shift}`,
    duration: 5.7,
    ease: "power4.inOut",
    modifiers: {
      xPercent: (x) => {
        return gsap.utils.wrap(-100, (cards.length - 1) * 100)(x);
      },
    },
    onComplete: () => {
      moveToClosestCard(shift);
    },
  });
};

const moveToClosestCard = (x: number) => {
  let shift = 100 - (x % 100);
  let direction;

  if (shift < 50) {
    direction = "-";
  } else {
    direction = "+";
    shift = 100 - shift;
  }

  gsap.to(cards, {
    xPercent: `${direction}=${shift}`,
    duration: 0.3,
    ease: "back.inOut(1)",
    onComplete: () => {
      addClasses();
      showModal();
      isPlaying = false;
    },
  });
};

// cards classes

const removeClasses = () => {
  cards.forEach((card) => {
    card?.firstElementChild?.classList.remove(
      "carousel-card-left",
      "carousel-card-center",
      "carousel-card-right",
    );
  });
};

const addClasses = () => {
  const leftCard = cards.find(
    (card) => gsap.getProperty(card, "xPercent") === 100,
  );

  const centerCard = cards.find(
    (card) => gsap.getProperty(card, "xPercent") === 200,
  );

  const rightCard = cards.find(
    (card) => gsap.getProperty(card, "xPercent") === 300,
  );

  leftCard?.firstElementChild?.classList.add("carousel-card-left");
  centerCard?.firstElementChild?.classList.add("carousel-card-center");
  rightCard?.firstElementChild?.classList.add("carousel-card-right");
  const resNumber = centerCard?.querySelector("p")?.textContent;
  if (resNumber) setContent(resNumber);
};

// modal

const setContent = (number: string) => {
  if (number) setResFn(number);
};

const showModal = () => {
  modal.classList.remove("opacity-0", "pointer-events-none");
};

export const hideModal = () => {
  modal.classList.add("opacity-0", "pointer-events-none");
  nextStep = true;
  stepCarousel();
  removeClasses();
};

// utils

const getRandomNumber = (min: number, max: number) => {
  return min + Math.random() * (max - min);
};
