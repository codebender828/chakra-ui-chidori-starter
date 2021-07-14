import { RouteRecordRaw } from 'vue-router'
import { DefineComponent } from 'vue'

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>
  export default component
}

/* @ts-ignore */
declare module 'feather-icons-paths' {
  /* @ts-ignore */
  export * from 'feather-icons-paths/dist/types'
}

declare module 'vue-star-rating' {}
declare module 'vue-stars' {}
declare module 'virtual:generated-layouts' {}
declare module 'virtual:generated-pages' {
  const routes: RouteRecordRaw[]
  export default routes
}

declare global {
  interface Window { 
    $emotionSSRIds: string[]
  }
}