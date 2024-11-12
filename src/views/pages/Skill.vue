<script setup>

    import { useRoute } from 'vue-router'
    import { skillList, toolList } from '@/assets/skill_tools.js'

    const route = useRoute()

    document.title = 'Arikusuma | ' + route.meta.title

</script>



<template class="duration-150">
    <div class="duration-150">
      <div class="project-container bg-gray-900 dark:bg-gray-100 text-white py-24 md:px-6 min-h-screen">
        <h1 class="text-4xl font-bold mb-8 text-center text-white dark:text-gray-700">Skills</h1>
        <div class="grid-container">
          <div v-for="(skill, index) in skillList" :key="index" class="card bg-gray-800 dark:bg-gray-200 dark:border dark:border-blue-400 rounded-lg overflow-hidden shadow-lg">
            <div class="flex justify-center items-center px-8 pt-8">
              <img :src="skill.icon" :alt="skill.name" class="max:w-full h-48">
            </div>
            <div class="p-4 text-center">
              <h2 class="text-xl font-bold mb-2 text-white dark:text-gray-700 ">{{ skill.name }}</h2>
              <h2 class="py-1 text-xl font-bold mb-2 text-white bg-gray-500 rounded uppercase tracking-wide">{{ skill.level }}</h2>

              <div class="flex justify-center gap-3 pt-3">
                <a :href="skill.link" target="_blank" class="text-gray-400 hover:text-white dark:hover:text-gray-800">
                  <i class="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="project-container bg-gray-900 dark:bg-gray-100 text-white py-24 md:px-6 min-h-screen">
        <h1 class="text-4xl font-bold mb-8 text-center text-white dark:text-gray-700">Tools</h1>
        <div class="grid-container">
          <div v-for="(tool, index) in toolList" :key="index" class="card bg-gray-800 dark:bg-gray-200 dark:border dark:border-blue-400 rounded-lg overflow-hidden shadow-lg">
            <div class="flex justify-center items-center px-8 pt-8">
              <img :src="tool.toolImage" :alt="tool.toolName" class="max:w-full h-48">
            </div>
            <div class="p-4 text-center">
              <h2 class="text-xl font-bold mb-2 text-white dark:text-gray-700 ">{{ tool.toolName }}</h2>

              <div class="flex justify-center gap-3 pt-3">
                <a :href="tool.toolLink" target="_blank" class="text-gray-400 hover:text-white dark:hover:text-gray-800">
                  <i class="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<style scoped>

.grid-container {
@apply grid gap-8 lg:gap-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 lg:px-36;
margin: auto;
}

.card:hover h2 {
@apply text-blue-500 duration-150
}

@media (max-width: 1024px) {
    .grid-container {
    grid-template-columns: 50% 50%; 
    justify-items: center; 
    }
}

@media (max-width: 640px) {
    .grid-container {
    grid-template-columns: 1fr; 
    justify-items: center; 
    }
}

</style>
