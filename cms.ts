import { Config, Field } from "alinea";
import { createCMS } from "alinea/next";
import { FaGitAlt, FaTimeline, FaToolbox } from "react-icons/fa6";

export const Stack = Config.type("Технология", {
  fields: {
    logo: Field.image("Логотип"),
    title: Field.text("Название"),
  },
});

export const Project = Config.type("Проект", {
  fields: {
    url: Field.url("Ссылка"),
    video: Field.file("Видео"),
    title: Field.text("Название"),
    description: Field.text("Описание"),
  },
});

export const Job = Config.type("Место работы", {
  fields: {
    title: Field.text("Должность"),
    company: Field.object("Компания", {
      fields: {
        title: Field.text("Название"),
        url: Field.url("Сайт"),
        color: Field.text("Цвет"),
      },
    }),
    period: Field.text("Период"),
    responsibilities: Field.list("Обязанности", {
      schema: {
        Responsibility: Config.type("Обязанность", {
          fields: {
            description: Field.text("Описание"),
          },
        }),
      },
    }),
  },
});

export const cms = createCMS({
  // List out available types in your schema
  schema: { Project, Job, Stack },

  // Define the content structure of your CMS
  workspaces: {
    main: Config.workspace("sibvan.dev", {
      source: "content",
      mediaDir: "public/cms",
      roots: {
        jobs: Config.root("Опыт", {
          contains: ["Job"],
          icon: FaTimeline,
        }),
        projects: Config.root("Проекты", {
          contains: ["Project"],
          icon: FaGitAlt,
        }),
        stacks: Config.root("Стек", {
          contains: ["Stack"],
          icon: FaToolbox,
        }),
        media: Config.media(),
      },
    }),
  },

  baseUrl: {
    // Point to your local website
    development: "http://localhost:3000",
    // The production URL of your website
    production: "https://sibvan.dev",
  },

  // Enable live previews after adding <cms.previews widget /> to your layout
  // preview: true,

  // The handler route URL
  handlerUrl: "/api/cms",

  // The admin dashboard will be bundled in this static file
  dashboardFile: "admin.html",
});
