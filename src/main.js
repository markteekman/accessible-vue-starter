import { createApp } from 'vue'
import App from './App.vue'

// register accessible components globally
import components from 'accessible-vue-components'

// project specific and component specific styles
import '~/assets/scss/globals.scss'
import './style.css'
import 'accessible-vue-components/dist/style.css'

const app = createApp(App)
app.use(components)
app.mount('#app')
