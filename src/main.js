import { createApp } from 'vue';
import Loading from 'vue-loading-overlay';
import App from './App.vue';
import router from './router';
import store from './store';

// css
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// js
import 'bootstrap/dist/js/bootstrap.bundle';

// 自己的css
import '@/assets/css/style.css';

const ap = createApp(App);

ap.component('Loading', Loading);

ap.use(store).use(router).mount('#app');
