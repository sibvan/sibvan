import { el, mount } from "redom";
import qs from "qs";
import { getData } from "../../api/cp";

const calculateAge = () => {
  let age = 0;

  const now = new Date();
  const currentYear = now.getFullYear();
  const birthdayYear = 1993;
  const thisYearBirthday = new Date(currentYear, 10, 26);
  const difference = now.getTime() - thisYearBirthday.getTime();

  if (difference > 0) {
    age = currentYear - birthdayYear;
  } else {
    age = currentYear - birthdayYear - 1;
  }

  return age;
};

export const renderAge = () => {
  const age = calculateAge();
  const divEl = document.querySelector(".hero__age");

  if (divEl) {
    const ageEl = el("p.hero__age-num", age);
    mount(divEl, ageEl);
  }
};

const getHeroData = async () => {
  const query = qs.stringify({
    fields: { "photo.path": 1, title: 1 },
  });
  const heroData = await getData(`/content/item/settings?${query}`);
  return heroData;
};

export const renderHeroData = async () => {
  const heroData = await getHeroData();

  const divEl = document.querySelector(".hero__photo");

  if (divEl) {
    const cardEl = document.querySelector(".hero__photo");
    cardEl?.classList.remove("card_placeholder");

    const photoEl = el("img.hero__me", {
      src: import.meta.env.VITE_API_ASSETS + heroData.photo.path,
      alt: "Моё фото",
    });
    mount(divEl, photoEl);
  }

  document.title = heroData.title;
};
