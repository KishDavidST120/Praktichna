import { createApp } from 'vue';
import App from './startAuth.vue';
import router from '@/router/routers.js';
import store from "@/authentification/authIndex.js";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');