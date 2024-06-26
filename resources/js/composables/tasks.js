import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default function useTasks () {

    const task = ref([]);
    const tasks = ref([]);

    const errors = ref('');
    const router = useRouter();

    const getTasks = async (data) => {
        let response = await axios.get('/api/tasks');
        tasks.value = response.data.data;
    }

    const getTask = async (id) => {
        let response = await axios.get(`/api/tasks/${id}`);
        task.value = response.data.data;
    }

    const storeTask = async (data) => {
        errors.value = '';

        try {
            await axios.get('/userLogged')
                    .then(response => {
                        data = JSON.stringify({ ...data, user_id: response['data']['id'].toString() });
                        data = JSON.parse(data);
                        axios.post('/api/tasks', data);
                        router.push({ name: 'tasks.index' });
                    });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors;
                }
            }
        }
    }

    const updateTask = async (id) => {
        errors.value = '';

        try {
            console.log(task.value);
            await axios.put(`/api/tasks/${id}`, task.value);
            await router.push({ name: 'tasks.index' });
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors;
                }
            }
        }
    }

    const destroyTask = async (id) => {
        await axios.delete(`/api/tasks/${id}`);
    }

    return {
        errors,
        task,
        tasks,
        getTask,
        getTasks,
        storeTask,
        updateTask,
        destroyTask
    }
}