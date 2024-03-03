<script setup>
import { defineProps, defineEmits } from 'vue';

const data = defineProps(['img', 'title']);
const emit = defineEmits(['send-data']);

const sendData = (title, img) => {
    const dataSend = [title, img]
    emit('send-data', dataSend)
}
</script>

<template>
    <div :id="data.title.split(' ').join('').toLowerCase()"
        class="border rounded-lg overflow-hidden w-full shadow-xl hover:bg-sky-400 hover:-translate-y-1 transition duration-500 group">
        <div class="">
            <img :src="data.img" :alt="data.img">
        </div>

        <div class="mt-5 px-4 group-hover:text-white">
            <h4 class="text-xl font-semibold capitalize mb-2">{{ data.title }}</h4>
            <div class="float-end flex items-center">
                <div @click="sendData(data.title, data.img)" class="mb-2 font-semibold mr-4 bg-yellow-400 text-white px-3 py-1 rounded-lg cursor-pointer group-hover:bg-primary group-hover:text-white">+</div>
                <router-link to=""
                class=" block float-end mt-3 mb-5 mr-2 py-1.5 px-8 bg-primary text-white rounded-md shadow-sm group-hover:bg-white group-hover:text-sky-400 transition duration-500">
                Detail
            </router-link>
        </div>
        </div>
    </div>
</template>