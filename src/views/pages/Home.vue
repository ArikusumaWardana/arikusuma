<script setup>
  import { useRoute } from 'vue-router'
  import { ref } from 'vue'
  import profil from '@/assets/photo.jpg'

  const route = useRoute()

  document.title = 'Arikusuma | ' + route.meta.title

  const iconLink = ref([
    {icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/arikusuma-wardana'},
    {icon: 'fa-brands fa-github', link: 'https://github.com/ArikusumaWardana'},
    {icon: 'fa-brands fa-instagram', link: 'https://www.instagram.com/arikusuma.05'},
    {icon: 'fa-brands fa-discord', link: 'https://discordid.netlify.app/?id=887315167958929469'}
  ])

</script>

<template>
  <div class="home-body lg:min-h-screen flex flex-col md:justify-center lg:justify-center items-center bg-gray-900 dark:bg-gray-100 px-6 pb-6 pt-16 lg:pt-0 duration-150">
    <div class="max-w-6xl lg:max-w-7xl w-full bg-gray-800 dark:border dark:border-blue-500 dark:bg-gray-200 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center">
      <div class="flex-shrink-0">
        <img :src="profil" alt="Profile Picture" class="h-56 w-56 lg:h-72 lg:w-72 rounded-full border-4 border-blue-500">
      </div>
      <div class="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold text-white dark:text-gray-700">
          Kadek Agus <span class="text-blue-500">Arikusuma Wardana</span>
        </h1>
        <p class="mt-4 text-gray-300 dark:text-gray-700 lg:text-xl lg:mt-5">
          Halo... Kenalin aku <span class="font-semibold">Kadek Agus Arikusuma Wardana</span>, bisa dipanggil <span class="font-semibold">Arik</span>. Aku adalah mahasiswa <span class="font-semibold">Primakara University</span>. Aku mengambil jurusan Informatika. Salam Kenal yakk <span class="font-extrabold">ᕙ(`▿´)ᕗ</span>
        </p>
        <div class="mt-4 flex justify-center md:justify-start space-x-4 lg:text-xl">
          <a v-for="(data, index) in iconLink" :key="index" :href="data.link" class="text-gray-400 dark:text-gray-700 dark:hover:text-gray-600 hover:text-white" target="_blank">
            <i :class="data.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>



