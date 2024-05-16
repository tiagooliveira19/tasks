import { createRouter, createWebHistory } from 'vue-router';
 
import TasksIndex from '@/components/tasks/TasksIndex.vue';
import TasksCreate from '@/components/tasks/TasksCreate.vue';
import TasksEdit from '@/components/tasks/TasksEdit.vue';
 
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
    { 
        path: '/tasks/:id/edit',
        name: 'tasks.edit',
        component: TasksEdit,
        props: true
    },
];
 
export default createRouter({
    history: createWebHistory(),
    routes
})