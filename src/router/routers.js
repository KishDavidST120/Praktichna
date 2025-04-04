import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/login.vue';
import Dashboard from '@/dashboard.vue';
import Home from '@/home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
