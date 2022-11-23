import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from '~/router'

// register accessible components globally
import components from 'accessible-vue-components'

// project and component specific styles
import '~/assets/scss/globals.scss'
import './index.css'
import 'nprogress/nprogress.css'
import 'accessible-vue-components/dist/style.css'

const app = createApp(App)
app.use(createPinia())
app.use(createHead())
app.use(router)
app.use(components)

router.isReady().then(() => {
  app.mount('#app')
})
