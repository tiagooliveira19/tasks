<template>
    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k" class="bg-red-400 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>

    <h3 class="mb-5 text-gray-700 border-bottom">Edit Task</h3>
 
    <form class="space-y-6" v-on:submit.prevent="saveTask">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <div class="mt-1">
                    <input type="text" name="title" id="title"
                            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            v-model="task.title">
                </div>
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <div class="mt-1">
                    <textarea name="description" id="description"
                            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            v-model="task.description"></textarea>
                </div>
            </div>
        </div>
 
        <div class="text-white cursor-pointer btn btn-dark uppercase float-left">
            <router-link :to="{ name: 'tasks.index' }" class="text-sm fs-12">Go Back</router-link>
        </div>

        <button type="submit"
            class="inline-flex items-center text-white uppercase float-right btn btn-success fs-12 mb-5">
            Update
        </button>
    </form>
</template>

<script setup>

    import useTasks from '@/composables/tasks'
    import { onMounted } from 'vue';
 
    const { errors, task, updateTask, getTask } = useTasks();
    const props = defineProps({
        id: {
            required: true,
            type: String
        }
    });
 
    onMounted(() => getTask(props.id))
 
    const saveTask = async () => {
        await updateTask(props.id)
    };
</script>