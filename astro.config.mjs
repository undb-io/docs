import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'undb',
      favicon: '/favicon.ico',
      customCss: ['./src/tailwind.css'],
      editLink: {
        baseUrl: 'https://github.com/undb-io/docs/edit/main/',
      },
      social: {
        github: 'https://github.com/undb-io/undb',
        email: 'mailto:hi@undb.io',
        discord: 'https://discord.gg/U9bdhB3c',
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
          label: 'Template',
          badge: 'cloud',
          autogenerate: {
            directory: 'template',
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
          label: 'Record',
          autogenerate: {
            directory: 'record',
          },
        },
        {
          label: 'View',
          autogenerate: {
            directory: 'view',
          },
        },
        {
          label: 'Form',
          autogenerate: {
            directory: 'form',
          },
        },
        {
          label: 'Developer',
          autogenerate: {
            directory: 'developer',
          },
        },
        ...openAPISidebarGroups,
        {
          label: 'Webhook',
          autogenerate: {
            directory: 'webhook',
          },
        },
        {
          label: 'Deployment',
          autogenerate: {
            directory: 'deployment',
          },
        },
      ],
      plugins: [
        // Generate the OpenAPI documentation pages.
        starlightOpenAPI([
          {
            base: '/api',
            label: 'Undb OpenAPI',
            schema: './schemas/undb.json',
          },
        ]),
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
