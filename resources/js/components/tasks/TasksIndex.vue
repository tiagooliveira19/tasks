<template>

    <div class="flex mb-4 place-content-end">
        <div class="px-4 py-2 text-white cursor-pointer btn btn-success uppercase">
            <router-link :to="{ name: 'tasks.create' }" class="text-sm font-medium">Add Task</router-link>
        </div>
    </div>

    <div class="min-w-full overflow-hidden overflow-x-auto align-middle sm:rounded-md">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">Id</span>
                    </th>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">Título</span>
                    </th>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">Descrição</span>
                    </th>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">Usuário</span>
                    </th>
                    <th class="px-6 py-3 text-center">
                        <span class="text-xs font-medium leading-4 tracking-wider uppercase">Ações</span>
                    </th>
                </tr>
            </thead>
 
            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <template v-for="item in tasks" :key="item.id">
                    <tr class="bg-white">
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.id }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.title }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.description }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.user_id }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-center text-gray-900 whitespace-no-wrap">
                            <button @click="deleteCompany(item.id)" 
                                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25">
                                Delete
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<script setup>
    import useTasks from "@/composables/tasks";
    import { onMounted } from 'vue';

    const { tasks, getTasks, destroyTask } = useTasks();

    const deleteTask = async (id) => {
        
        if (!window.confirm('Você tem certeza?')) {
            return
        }
 
        await destroyTask(id);
        await getTasks();
    }

    onMounted(getTasks);
</script>