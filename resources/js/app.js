import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue'; 
import router from './router'
 
import TasksIndex from '@/components/tasks/TasksIndex.vue';
 
createApp({
    components: {
        TasksIndex
    }
}).use(router).mount('#app')