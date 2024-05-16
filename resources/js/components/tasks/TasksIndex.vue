<template>
    <div class="min-w-full overflow-hidden overflow-x-auto align-middle sm:rounded-md">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">Id</span>
                    </th>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">Title</span>
                    </th>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">Description</span>
                    </th>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">User</span>
                    </th>
                    <th class="px-6 py-3">
                        <span class="text-xs font-medium leading-4 tracking-wider text-center uppercase">Created At</span>
                    </th>
                    <th class="px-6 py-3 text-center">
                        <span class="text-xs font-medium leading-4 tracking-wider uppercase">Actions</span>
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
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ item.created_at }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-center text-gray-900 whitespace-no-wrap">
                            <router-link :to="{ name: 'tasks.edit', params: { id: item.id } }"
                                    class="text-white cursor-pointer uppercase btn btn-dark fs-12 mr-2">Edit</router-link> 
                            <button @click="deleteTask(item.id)" 
                                class="inline-flex items-center text-white uppercase btn btn-dark fs-12">
                                Delete
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>

    <div class="flex mt-5 mb-3 place-content-end">
        <div class="text-white cursor-pointer btn btn-success uppercase">
            <router-link :to="{ name: 'tasks.create' }" class="text-sm fs-12">New Task</router-link>
        </div>
    </div>
</template>
<script setup>
    import useTasks from "@/composables/tasks";
    import { onMounted } from 'vue';

    const { tasks, getTasks, destroyTask } = useTasks();

    const deleteTask = async (id) => {
        
        if (!window.confirm('Are you sure?')) {
            return
        }
 
        await destroyTask(id);
        await getTasks();
    }

    onMounted(getTasks);
</script>