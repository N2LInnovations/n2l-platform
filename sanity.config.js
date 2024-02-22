import N2LLogo from '/public/assets/img/n2l-logo.png'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { schemaTypes } from '@/schemas'

export default defineConfig({
  name: 'n2l-content-studio',
  basePath: '/studio',
  title: 'N2L Content Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  plugins: [deskTool(), visionTool(), vercelDeployTool()],
  schema: {
    types: schemaTypes,
  },
  // studio: {
  //   components: {
  //     logo: N2LLogo,
  //   },
  // },
})
