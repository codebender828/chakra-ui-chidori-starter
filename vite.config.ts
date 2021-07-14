import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'vite-plugin-components'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { componentResolver } from '@chakra-ui/vue-auto-import'
import { handleSSG } from './src/utils/ssg'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      customComponentResolvers: [componentResolver],
    }),
    Pages({
      pagesDir: ['./src/pages']
    }),
    Layouts({
      layoutsDir: './src/layouts'
    }),
  ],
  // @ts-expect-error
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
    onPageRendered: handleSSG,
  },
})
