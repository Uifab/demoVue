import Vue from 'vue'
import App from './App.vue'

import { makeServer } from './server'

import router from '@/router/index';


if (process.env.NODE_ENV === 'development') {
	makeServer()
}

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router: router
}).$mount('#app')