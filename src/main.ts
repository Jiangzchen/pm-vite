/*
 * @Author: Jiangzchen 927764151@qq.com
 * @Date: 2022-06-07 13:22:16
 * @LastEditors: Jiangzchen 927764151@qq.com
 * @LastEditTime: 2022-07-01 19:09:24
 * @FilePath: \pm-vite\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import ElementUI from 'element-ui';
import Antd from 'ant-design-vue';
import 'element-ui/lib/theme-chalk/index.css';
import 'ant-design-vue/dist/antd.css';
import router from "./router";
import "./styles/index.scss";

import { createPinia, PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)


Vue.use(VueCompositionAPI)
Vue.use(ElementUI)
Vue.use(Antd)


const app = new Vue({ 
    router,
    pinia: createPinia(),
    render: h => h(App) })
app.$mount('#app')
