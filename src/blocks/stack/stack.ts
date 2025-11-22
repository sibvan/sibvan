import qs from "qs";
import { getData } from "../../api/cp";
import { el, mount } from "redom";

interface stackItem {
  title: string;
  logo: {
    path: string;
  };
}

export const renderStack = async () => {
  const query = qs.stringify({
    fields: { title: 1, "logo.path": 1, "logo.title": 1 },
    sort: { _o: 1 },
  });

  const stackList = await getData(`/content/items/stack?${query}`);

  const ulEl = document.querySelector(".stack");

  if (ulEl) {
    const placeholderEls = document.querySelectorAll(
      ".stack__item_placeholder"
    );
    placeholderEls.forEach((element) => {
      element.remove();
    });

    stackList.forEach((stackItem: stackItem) => {
      const titleEl =
        stackItem.title === stackItem.title.toUpperCase()
          ? "h3.card-title.stack__item-title.text-spaced"
          : "h3.card-title.stack__item-title";

      const liEl = el(
        "li.stack__item.card",
        el(
          "div.stack__img-wrapper",
          el("img.stack__img", {
            src: import.meta.env.VITE_API_ASSETS + stackItem.logo.path,
            alt: stackItem.title,
          })
        ),
        el(titleEl, stackItem.title)
      );
      mount(ulEl, liEl);
    });
  }
};
