import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/base.css';
import App from './App.vue';
import router from './router';

// @ts-ignore
window.pavel = createApp(App);

// @ts-ignore
window.pavel.use(createPinia());
// @ts-ignore
window.pavel.use(router);
// @ts-ignore
window.pavel.use(Vant);
// @ts-ignore
window.pavel.mount('#app');
