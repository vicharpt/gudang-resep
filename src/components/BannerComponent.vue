<script setup>
const resep = defineProps(['resep'])
</script>

<template>
    <div class="flex justify-center w-full">
        <img :src="resep.resep" :alt="resep.resep" class="h-full rounded">
    </div>
</template>