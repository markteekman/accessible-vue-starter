import { createRouter, createWebHistory } from 'vue-router'
import { capitalizeFirstLetter } from '~/composables/capitalize'
import { useProjectStore } from '~/stores/project'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import NProgress from 'nprogress'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  NProgress.start()
  const showProjectName = useProjectStore().projectName
  document.title = `
    ${capitalizeFirstLetter(to.name?.toString().replace(/-/g, ' '))} | ${showProjectName}
  `
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
