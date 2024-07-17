import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Undb",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Introduce",
          slug: "introduce",
        },
        {
          label: "Base",
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Create Form", slug: "getStarted/createForm" },
          // ],
          autogenerate: { directory: "base" },
        },
        {
          label: "No-code development",
          autogenerate: { directory: "nocode-development" },
        },
        {
          label: "Integrating",
          autogenerate: { directory: "integrating" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
