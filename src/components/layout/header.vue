<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/logo-a.png'

const isScrolled = ref(false)
const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.documentElement.classList.toggle('dark', isDarkMode.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


const navbarLink = ref([
  {title: 'Home', links: '/'},
  {title: 'About', links: '/about'},
  {title: 'Project', links: '/project'},
  {title: 'Skills & Tools', links: '/skill'}
])

</script>

<template>
   <nav :class="['p-3 fixed w-full z-50 transition-all duration-300', isScrolled ? 'bg-gray-800 dark:bg-gray-200 border-b border-blue-600' : 'bg-transparent']">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img :src="logo" alt="Logo" class="h-12 w-12">
        <span class="text-white text-xl dark:text-gray-800 font-semibold hidden md:block">Arikusuma Wardana</span>
      </div>
      <div class="hidden md:flex space-x-3">
        <router-link v-for="(data, index) in navbarLink" :key="index" :to="data.links" active-class="active" exact-active-class="active" class="nav-menu text-gray-200 dark:text-gray-800 hover:bg-blue-600 hover:text-white hover:duration-200 focus:bg-blue-600 px-3 py-2 rounded-md text-sm font-semibold">{{ data.title }}</router-link>
        <button @click="toggleDarkMode" class="text-gray-300 dark:text-gray-800 hover:text-white focus:outline-none px-3 py-2 w-1">
          <i :class="[isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun']"></i>
        </button>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-300 dark:text-gray-700 hover:text-white focus:outline-none">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
    <div v-show="isMenuOpen" class="md:hidden">
      <router-link v-for="(data, index) in navbarLink" :key="index" :to="data.links" active-class="active" exact-active-class="active" class="block nav-menu text-gray-300 dark:text-gray-800 hover:bg-blue-600 hover:text-white hover:duration-200 focus:bg-blue-600 px-3 py-2 rounded-md text-base font-medium text-center">{{ data.title }}</router-link>
      <button @click="toggleDarkMode" class="text-gray-300 hover:text-white focus:outline-none w-full text-center mt-4">
        <i :class="[isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun']"></i>
      </button>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
</script>

<style scoped>

.nav-menu:hover {
  color: white !important
}

.active {
  color: white !important;
}

</style>
