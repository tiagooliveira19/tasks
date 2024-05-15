import { createRouter, createWebHistory } from 'vue-router';
 
import TasksIndex from '@/components/tasks/TasksIndex.vue';
 
const routes = [
    {
        path: '/dashboard',
        name: 'tasks.index',
        component: TasksIndex
    }
];
 
export default createRouter({
    history: createWebHistory(),
    routes
})