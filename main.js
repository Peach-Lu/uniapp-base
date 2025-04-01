import App from './App'
// 导入uview
import uviewPlus from '@/uni_modules/uview-plus'
console.log('uviewPlus',uviewPlus)
import 'uno.css'
// 导入根据函数
import utils from "./utils/utils"
// 导入过滤器
import filters from "./filters/index"
// 导入Store
import store from "./store";

// #ifdef VUE3

import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	// 注册全局过滤器 vue3没有过滤器,直接当做方法调佣,例如:$filters.img()
	app.config.globalProperties.$filters = filters
	// 工具函数继承到vue实例
	app.config.globalProperties = Object.assign(app.config.globalProperties, utils)
	// 安装uview
	app.use(uviewPlus)
	console.log(' v',uviewPlus.install)
	// 安装vuex
	app.use(store)
	
	return {
		app
	}

}
// #endif


































// #ifndef VUE3
// import Vue from 'vue'
// Vue.config.productionTip = false
// App.mpType = 'app'
// const app = new Vue({
// 	...App
// })
// app.$mount()
// #endif
