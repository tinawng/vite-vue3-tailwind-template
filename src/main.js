import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import { routes } from '@/routes.js'
import '@/styles/tailwind.css'
import '@/styles/base.postcss'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
