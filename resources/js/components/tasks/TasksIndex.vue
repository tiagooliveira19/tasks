<template>
    <div class="min-w-full overflow-hidden overflow-x-auto align-middle sm:rounded-md">
        <table class="table table-striped">
            <thead>
            <tr>
                <th class="px-6 py-3">
                    <span class="text-xs font-medium leading-4 tracking-wider text-left uppercase">Id</span>
                </th>
                <th class="px-6 py-3">
                    <span class="text-xs font-medium leading-4 tracking-wider text-left uppercase">Título</span>
                </th>
                <th class="px-6 py-3">
                    <span class="text-xs font-medium leading-4 tracking-wider text-left uppercase">Descrição</span>
                </th>
                <th class="px-6 py-3">
                    <span class="text-xs font-medium leading-4 tracking-wider text-left uppercase">Usuário</span>
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
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>
<script setup>
    import useTasks from "@/composables/tasks";
    import { onMounted } from 'vue';

    const { tasks, getTasks } = useTasks();

    onMounted(getTasks);
</script>