import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import axios from 'axios'
// svg
import "./js/svg"
// svg 全局组件
import SvgIcon from "@/views/layout/components/svgIcon/Index"
// main.scss
import "./styles/main.scss"
// Ant Design
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// i18n 国际化
import i18n from './language'

const app = createApp(App)
// 设置全局属性
app.config.globalProperties.$axios = axios
//
app.use(store).use(router).use(Antd).use(i18n).component("svg-icon", SvgIcon).mount('#app')
