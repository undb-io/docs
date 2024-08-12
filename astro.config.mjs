import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'undb',
      favicon: '/favicon.ico',
      customCss: ['./src/tailwind.css'],
      social: {
        github: 'https://github.com/undb-io/undb',
      },
      sidebar: [
        {
          label: 'Introduction',
          slug: 'index',
        },
        {
          label: 'Space',
          autogenerate: {
            directory: 'space',
          },
        },
        {
          label: 'Base',
          autogenerate: {
            directory: 'base',
          },
        },
        {
          label: 'Table',
          autogenerate: {
            directory: 'table',
          },
        },
        {
          label: 'Field',
          autogenerate: {
            directory: 'field',
          },
        },
        {
          label: 'Field Type',
          autogenerate: {
            directory: 'field-types',
          },
        },
        {
          label: 'View',
          autogenerate: {
            directory: 'view',
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
