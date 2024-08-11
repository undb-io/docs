import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Undb',
      social: {
        github: 'https://github.com/undb-io/undb',
      },
      sidebar: [
        { label: 'Introduction', slug: 'index' },
        { label: 'Space', autogenerate: { directory: 'space' } },
        { label: 'Base', autogenerate: { directory: 'base' } },
      ],
    }),
  ],
})
