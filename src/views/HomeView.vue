<script setup>
import { onMounted, ref } from 'vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import CardComponent from '@/components/CardComponent.vue'
import Resep from '@/data/resep.json';

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

  <section id="makanan" class="py-24">
    <div class="container">
      <h2 class="text-2xl font-bold w-max text-gray-700 border-l-4 border-primary pl-5 mb-20">Makanan</h2>
      <div class="grid md:grid-cols-3 gap-16 px-8 mb-36">
        <card-component @send-data="addToCart" v-for="data in makanan" :img="data.strMealThumb" :title="data.strMeal" />
      </div>
    </div>
  </section>

  <section id="minuman" class="py-24">
    <div class="container">
      <h2 class="text-2xl font-bold w-max text-gray-700 border-l-4 border-primary pl-5 mb-20">Minuman</h2>
      <div class="grid md:grid-cols-3 gap-16 px-8 mb-36">
        <card-component @send-data="addToCart" v-for="data in minuman" :img="data.strDrinkThumb" :title="data.strDrink" />
      </div>
    </div>
  </section>
</template>