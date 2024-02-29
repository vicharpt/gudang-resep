<script setup>
import { defineProps } from 'vue';
const data = defineProps(['data']);
// console.log(data)
</script>

<template>
    <div
        class="border rounded-lg overflow-hidden w-full shadow-xl hover:bg-sky-400 hover:-translate-y-1 transition duration-500 group">
        <div class="-mt-16">
            <img :src="data.data.strMealThumb" class="object-bottom"
                :alt="data.img">
        </div>

        <div class="mt-5 px-4 group-hover:text-white">
            <h4 class="text-xl font-semibold capitalize mb-2">{{ data.data.strDrink || data.data.strMeal }}</h4>
            <router-link to=""
                class=" block float-end mt-3 mb-5 mr-2 py-1.5 px-8 bg-primary text-white rounded-md shadow-sm group-hover:bg-white group-hover:text-sky-400 transition duration-500">Detail</router-link>
        </div>
    </div>
</template>