import { createApp } from 'vue';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import VueAxios from 'vue-axios';
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

// 自己的js
import Parse from './components/Parse.vue';
import Tools from './components/Tools.vue';

// 自己的api.json
const apirule = require('./assets/api.json');

const ap = createApp(App);

ap.config.globalProperties.Parse = Parse;
ap.config.globalProperties.Tools = Tools;
ap.config.globalProperties.ApiRule = apirule;

ap.component('Loading', Loading);
ap.use(VueAxios, axios).use(store).use(router).mount('#app');
