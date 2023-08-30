import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import { messages, locale } from './locale'

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: locale,
  fallbackLocale: 'en-US',
  messages
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
