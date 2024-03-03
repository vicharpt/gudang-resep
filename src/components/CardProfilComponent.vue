<script setup>
import { defineProps } from 'vue';

const data = defineProps(['name','profil'])
</script>

<template>
    <div class="grid grid-cols-10 items-center border p-3 rounded shadow-md bg-primary hover:bg-slate-200 hover:text-secondary transition duration-500">
        <div class="col-span-2 w-3/4 m-2 rounded-full overflow-hidden border-4 border-primary shadow">
            <img class="w-full"
            :src="data.profil" :alt="data.name">
        </div>
        <div class="col-span-8">
            <h4 class="text-2xl font-bold">{{ data.name }}</h4>
        </div>
    </div>
</template>