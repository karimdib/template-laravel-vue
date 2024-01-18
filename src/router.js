import { createRouter, createWebHistory } from "vue-router";
import Prova from './components/Prova.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'prova',
            component: Prova
        }
    ]
})
export { router }