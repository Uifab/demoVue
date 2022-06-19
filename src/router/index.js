
import Vue from "vue";
import VueRouter from 'vue-router';

import InvoicesPage from '@/pages/InvoicesPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ 	path: '/', 
			component: InvoicesPage 
		},
	]	
})

export default router