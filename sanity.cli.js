import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vy0p2rlv',
    dataset: 'production',
    apiversion: '2021-10-21',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
  }
})
