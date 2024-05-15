import { createRouter, createWebHistory } from 'vue-router';
 
import TasksIndex from '@/components/tasks/TasksIndex.vue';
import TasksCreate from '@/components/tasks/TasksCreate.vue';
 
const routes = [
    {
        path: '/dashboard',
        name: 'tasks.index',
        component: TasksIndex
    },
    { 
        path: '/tasks/create',
        name: 'tasks.create',
        component: TasksCreate
    },
];
 
export default createRouter({
    history: createWebHistory(),
    routes
})