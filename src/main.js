import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' // index라는 이름의 확장자는 생략가능
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
.use(router)
.use(store)
.use(loadImage)
.mount('#app')