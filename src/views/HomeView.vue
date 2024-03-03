<script setup>
import { onMounted, ref } from 'vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import CardProfilComponent from '@/components/CardProfilComponent.vue';
import Resep from '@/data/resep.json';
import Profil from '@/data/profil.json';

import IndraSaputra from '@/assets/Indra Saputra.jpg'
import NeruAnggara from '@/assets/Neru Anggara.png'
import FathirGhatanAlibhi from '@/assets/Fathir Ghatan Alibhi.png'

const profil = ref(Profil)
const profilImg = ref([IndraSaputra, NeruAnggara, FathirGhatanAlibhi])

const resep = ref(Resep)
let dataCart = ref([])
const makanan = ref([])
const minuman = ref([])
let banner = ref('https://www.frisianflag.com/storage/app/media/uploaded-files/rendang-padang.jpg')

const addToCart = (data) => {
  if (dataCart.includes(data)) return data 
  dataCart.value.push(data)
}


const selectTenData = arr => {
  return arr.filter((data, i) => i < 10)
}

onMounted(async () => {
  const mkn = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=egg').then(res => res.json())
  const mnm = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka').then(res => res.json())
  const dataMakanan = selectTenData(mkn.meals)
  delete (mkn.meals)
  const dataMinuman = selectTenData(mnm.drinks)
  delete (mnm.drinks)

  makanan.value = dataMakanan
  minuman.value = dataMinuman
})


const setBanner = () => {
  let newIndex = 1
  let oldIndex = 0
  setInterval(() => {
    oldIndex = newIndex
    if (newIndex == resep.value.length) {
      newIndex = 0
    }
    banner.value = resep.value[newIndex].img
    resep.value[oldIndex - 1].active = false
    resep.value[newIndex].active = true
    newIndex++
  }, 5000);
}
setBanner()

const dataForm = ref({
  'nama': '',
  'email': '',
  'pesan': ''
})

const sendForm = () => {
  dataForm.value.nama = ''
  dataForm.value.email = ''
  dataForm.value.pesan = ''
}

</script>

<template>
  <navbar-component />

  <section id="beranda" class="pt-36 h-screen">
    <div class="container h-full py-5">
      <!-- Banner -->
      <div class="flex gap-1 h-full overflow-y-hidden">
        <div class="w-80 border-r hidden md:block">
          <h3 class="text-lg font-bold mt-1 mb-3">Rekomendasi</h3>
          <ul class="list-disc pl-7 w-56">
            <li v-for="(r, i) in resep" :key="i" class="my-4 pb-1 border-b group">
              <a href="" @click.prevent
                class="transition duration-300 group-hover:-translate-y-0.5 group-hover:text-primary block"
                :class="r.active ? 'font-semibold text-primary' : ''">{{ r.title }}</a>
            </li>
          </ul>
        </div>
        <banner-component :resep="banner" class="rounded transition duration-500" />
      </div>
    </div>
  </section>

  <section id="makanan" class="pt-24">
    <div class="container">
      <h2 class="text-2xl font-bold w-max text-gray-700 border-l-4 border-primary pl-5 mb-20">Makanan</h2>
      <div class="grid md:grid-cols-3 gap-16 px-8 mb-36">
        <card-component @send-data="addToCart" v-for="data in makanan" :img="data.strMealThumb" :title="data.strMeal" />
      </div>
    </div>
  </section>

  <div class="container">
    <hr>
  </div>

  <section id="minuman" class="py-24">
    <div class="container">
      <h2 class="text-2xl font-bold w-max text-gray-700 border-l-4 border-primary pl-5 mb-20">Minuman</h2>
      <div class="grid md:grid-cols-3 gap-16 px-8 mb-36">
        <card-component @send-data="addToCart" v-for="data in minuman" :img="data.strDrinkThumb" :title="data.strDrink" />
      </div>
    </div>
  </section>

  <section id="profil" class="pt-24 pb-10 bg-gray-900 text-white">
    <div class="container text-center">
      <h2 class="text-2xl font-bold">Profil Kami</h2>
      <p class="text-lg">Mari berkenalan dengan kami.</p>

      <div class="flex justify-center flex-wrap mt-11">
        <a :href="p.url" target="_blank" class="w-full md:w-2/5 m-5" v-for="(p, i) in profil">
          <card-profil-component  :name="p.name" :profil="profilImg[i]"/>
        </a>
      </div>
    </div>
  </section>

  <section id="kontak" class="py-24">
    <div class="container">
      <h1 class="text-lg md:text-4xl font-bold text-center mb-16">Halaman kontak!</h1>
      <form @submit.prevent="sendForm" method="post">
      <div class="grid grid-cols-9 gap-7 ">
        <div class="col-span-full md:col-span-3 border shadow-md rounded-md p-0.5 overflow-hidden">
          <input type="text" v-model="dataForm.nama" class="w-full h-full focus:outline-none p-2.5 rounded focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Nama..." required>
        </div>
        <div class="col-span-full md:col-span-6 border shadow-md rounded-md p-0.5 overflow-hidden">
          <input type="email" v-model="dataForm.email" class="w-full h-full focus:outline-none p-2.5 rounded focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Email..." required>
        </div>
        <div class="col-span-full border shadow-md rounded">
          <textarea v-model="dataForm.pesan" class="w-full h-60 focus:outline-none p-2.5 rounded focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Pesan..." required></textarea>
        </div>
        <div>
          <button type="submit" class="bg-primary py-2 px-8 text-white font-semibold rounded">Kirim</button>
        </div>
      </div>
    </form>
    </div>
  </section>

  <footer-component />
</template>