// @ts-ignore
import App from './App.vue'
import Chakra from '@chakra-ui/vue-next'
import { chakra, domElements } from '@chakra-ui/vue-system'
import { ViteSSG } from 'vite-ssg'
// @ts-ignore
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { hydrate } from '@emotion/css'

import * as icons from './utils/icons'
import theme from './theme/extend'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes }, ({ app, isClient }) => {
  if (isClient) {
    const ssrIds = window?.$emotionSSRIds || []
    hydrate(ssrIds)
  }

  app.use(Chakra, {
    extendTheme: theme,
    icons: {
      library: icons
    }
  })

  domElements.forEach((tag) => {
    app.component(`chakra.${tag}`, chakra(tag))
  })
})