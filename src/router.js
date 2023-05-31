import { createRouter, createWebHistory } from 'vue-router';

import AppWelcome from './pages/AppWelcome.vue';
import AppContact from './pages/AppContact.vue';
import CardShow from './pages/CardShow.vue';
import ProjectList from './pages/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: AppWelcome
        },
        {
            path: '/contact',
            name: 'contatti',
            component: AppContact
        },
        {
            path: '/project',
            name: 'progetto',
            component: CardShow
        },
        {
            path: '/list',
            name: 'lista-progetti',
            component: ProjectList
        }
    ]
});

export { router }
