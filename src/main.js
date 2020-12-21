import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// main.scss
import "./styles/main.scss"
// Ant Design
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// i18n 国际化
import i18n from './language'
createApp(App).use(store).use(router).use(Antd).use(i18n).mount('#app')
