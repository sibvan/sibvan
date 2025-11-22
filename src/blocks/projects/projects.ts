import qs from "qs";
import { getData } from "../../api/cp";
import { el, mount } from "redom";

interface projectItem {
  title: string;
  description: string;
  url: string;
  video: {
    path: string;
  };
}

export const renderProjects = async () => {
  const query = qs.stringify({
    fields: { title: 1, description: 1, url: 1, "video.path": 1 },
    sort: { _o: 1 },
  });

  const projectsList = await getData(`/content/items/projects?${query}`);
  const ulEl = document.querySelector(".projects");

  if (ulEl) {
    const placeholderEls = document.querySelectorAll(
      ".projects__item_placeholder"
    );
    placeholderEls.forEach((element) => {
      element.remove();
    });

    projectsList.forEach((projectItem: projectItem) => {
      const liEl = el(
        "a.projects__item.card",
        { href: projectItem.url, target: "_blank" },
        el("p.card-title.projects__url", projectItem.url),
        el(
          "div.projects__video-wrapper",
          el(
            "video.projects__video",
            { muted: true, autoplay: true, playsinline: true, loop: true },
            el("source", {
              src: import.meta.env.VITE_API_ASSETS + projectItem.video.path,
            })
          )
        ),

        el(
          "div.projects__btm",
          el(
            "div.projects__info",
            el("h2.projects__item-title", projectItem.title),
            el("p.projects__item-subtitle", projectItem.description)
          ),
          el("div.icon-arrow.projects__arrow")
        )
      );
      mount(ulEl, liEl);
    });
  }
};
