import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import vueRouter from './router'
import 'element-plus/theme-chalk/index.css';

import "./assets/css/main.css";
import "./assets/css/fonts/iconfont"

const app = createApp(App)
app.use(ElementPlus).use(vueRouter).mount('#app')
