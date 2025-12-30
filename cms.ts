import { Config, Field } from "alinea";
import { createCMS } from "alinea/next";

// Create types for your CMS schema

export const ExpItem = Config.type("Место работы", {
  fields: {
    title: Field.text("Должность"),
    company: Field.object("Компания", {
      fields: {
        title: Field.text("Название"),
        url: Field.url("Сайт"),
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
  schema: { ExpItem },

  // Define the content structure of your CMS
  workspaces: {
    main: Config.workspace("sibvan.dev", {
      source: "content",
      mediaDir: "public",
      roots: {
        pages: Config.root("Опыт", {
          contains: ["ExpItem"],
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
