<script setup>
import { ref } from 'vue'
import SearchIcon from './icons/SearchIcon.vue'
import CartIcon from './icons/CartIcon.vue'

let searchInput = ref('')

const title = ref('Resmex')
const links = ref([
    { link: 'Beranda', actived: true },
    { link: 'Makanan', actived: false },
    { link: 'Minuman', actived: false },
    { link: 'Profil', actived: false },
    { link: 'Kontak', actived: false }
])

let toggle = true

const onClickLink = (i) => {
    links.value.map(link => link.actived = false)
    links.value[i].actived = true
}

</script>


<template>
    <header class="fixed bg-white top-0 right-0 w-full z-50">
        <div>
            <div class="container">
                <div class="flex justify-between items-center relative">
                    <div>
                        <a href="/" class="text-lg font-bold block py-6 text-primary">{{ title }}</a>
                    </div>
    
                    <div class="z-10">
                        <button class="hamburger-toggle absolute top-7 right-4" :class="toggle ? 'hamburger-active':''">
                            <span class="hamburger-line origin-top-left"></span>
                            <span class="hamburger-line"></span>
                            <span class="hamburger-line origin-bottom-left"></span>
                        </button>


                        <nav class="absolute top-full max-w-full w-full left-0">
                            <ul class="flex flex-col md:flex-row gap-5">
                                <li v-for="(link, i) in links" :key="i" class="group">
                                    <a :href="`/#${link.link.toLowerCase()}`" class="text-md font-semibold"
                                        :class="link.actived ? 'text-primary' : 'group-hover:text-primary transition duration-700 ease-in text-secondary'"
                                        @click="onClickLink(i)">
                                        {{ link.link }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
    
                    <div class="hidden md:block">
                        <a href="" class="mx-2 font-semibold text-secondary">Masuk</a>|<a href="" class="mx-2 text-primary font-semibold">Daftar</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-tr from-sky-400 to-sky-300 py-4 shadow-inner">
            <div class="container flex items-center">
                <div class="w-64 hidden">
                    <h2 class="text-white text-lg font-semibold">SMKN 1 Bondowoso</h2>
                </div>
    
                <div class="relative flex items-center w-full bg-white shadow-sm py-2 px-2 rounded-lg text-primary outline-primary overflow-hidden">
                    <a :href="`#${searchInput.split(' ').join('').toLowerCase()}`" class="absolute right-3 cursor-pointer" >
                        <search-icon />
                    </a>
                    <input type="text" placeholder="Cari resep disini..." v-model="searchInput" class="pl-2 placeholder:text-primary outline-none bg-transparent w-full">
                </div>

                <div class="ml-8 mr-5 text-primary">
                    <router-link to="/">
                        <cart-icon/>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>