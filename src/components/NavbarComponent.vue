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

let toggle = ref(false)

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
                        <button class="hamburger-toggle z-20 md:hidden absolute top-7 right-4 transition-transform duration-500"
                            :class="toggle ? 'hamburger-active top-[660%] -right-0 bg-primary shadow-xl py-2.5 px-2.5 rounded-full h-11 w-11' : 'h-5 w-5'"
                            @click="toggle = !toggle">
                            <span class="hamburger-line origin-top-left" :class="toggle ? 'bg-white':'bg-primary'" ></span>
                            <span class="hamburger-line bg-primary"></span>
                            <span class="hamburger-line origin-bottom-left" :class="toggle ? 'bg-white':'bg-primary'"></span>
                        </button>


                        <nav
                            class="absolute md:static top-0 w-[110%] md:w-full left-1/2 h-screen md:h-auto px-5 -translate-x-1/2 md:translate-x-0 bg-white md:bg-transparent  transition duration-300"
                            :class="toggle ? 'translate-x-none':'-translate-x-[200%]'">
                            <div class="flex items-center border-b border-black mt-7 mb-9 pb-5 md:hidden">
                                <div
                                    class="relative border border-primary flex items-center w-full bg-white shadow-sm py-2 px-2 rounded-lg text-primary outline-primary overflow-hidden">
                                    <a :href="`#${searchInput.split(' ').join('').toLowerCase()}`"
                                        class="absolute right-3 cursor-pointer">
                                        <search-icon />
                                    </a>
                                    <input type="text" placeholder="Cari resep disini..." v-model="searchInput"
                                        class="pl-2 placeholder:text-primary outline-none bg-transparent w-full">
                                </div>

                                <div class="ml-8 mr-5 text-primary">
                                    <router-link to="/">
                                        <cart-icon />
                                    </router-link>
                                </div>
                            </div>


                            <ul class="flex flex-col md:flex-row gap-5">
                                <li v-for="(link, i) in links" :key="i"
                                    class="group border-b md:border-none pb-2 md:pb-0">
                                    <a :href="`/#${link.link.toLowerCase()}`" class="text-md font-semibold"
                                        :class="link.actived ? 'text-primary' : 'group-hover:text-primary transition duration-700 ease-in text-secondary'"
                                        @click="onClickLink(i)">
                                        {{ link.link }}
                                    </a>
                                </li>
                            </ul>

                            <div class="mt-10 text-center block md:hidden">
                                <a href=""
                                    class="inline-block  mx-1.5 font-semibold text-secondary border py-1.5 px-5 rounded-full border-primary">Masuk</a>
                                <a href=""
                                    class="inline-block  mx-1.5 text-white font-semibold bg-primary py-1.5 px-5 rounded-full">Daftar</a>
                            </div>

                            <div
                                class="absolute md:hidden bottom-2 left-0 pt-2 text-center border-t border-black w-full">
                                <h2 class="text-primary text-lg font-semibold">SMKN 1 Bondowoso</h2>
                            </div>
                        </nav>
                    </div>

                    <div class="hidden md:block">
                        <a href="" class="mx-2 font-semibold text-secondary">Masuk</a>|<a href=""
                            class="mx-2 text-primary font-semibold">Daftar</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-tr from-sky-400 to-sky-300 py-4 shadow-inner">
            <div class="container flex items-center">
                <div class="w-64 hidden md:block">
                    <h2 class="text-white text-lg font-semibold">SMKN 1 Bondowoso</h2>
                </div>

                <div
                    class="relative flex items-center w-full bg-white shadow-sm py-2 px-2 rounded-lg text-primary outline-primary overflow-hidden">
                    <a :href="`#${searchInput.split(' ').join('').toLowerCase()}`"
                        class="absolute right-3 cursor-pointer">
                        <search-icon />
                    </a>
                    <input type="text" placeholder="Cari resep disini..." v-model="searchInput"
                        class="pl-2 placeholder:text-primary outline-none bg-transparent w-full">
                </div>

                <div class="ml-8 mr-5 text-primary">
                    <router-link to="/">
                        <cart-icon />
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>