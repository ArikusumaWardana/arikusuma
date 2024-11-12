<script setup>

    import { useRoute } from 'vue-router'
    import { projectList } from '@/assets/project.js'

    const route = useRoute()

    document.title = 'Arikusuma | ' + route.meta.title

</script>

<template>
    <div class="project-container bg-gray-900 dark:bg-gray-100 text-white py-24  md:px-6 min-h-screen duration-150">
        <h1 class="text-4xl font-bold mb-8 text-center text-white dark:text-gray-700">My Projects</h1>
        <div class="grid-container">
            <div v-for="(project, index) in projectList" :key="index" class="card bg-gray-800 dark:bg-gray-200 dark:border dark:border-blue-400 rounded-lg overflow-hidden shadow-lg max-w-xl">
                <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
                <div class="p-4 text-center">
                    <h2 class="text-xl lg:text-2xl font-bold mb-2 text-white dark:text-gray-700">{{ project.title }}</h2>
                    <div class="flex justify-center items-center mb-4">
                        <span v-for="(tech, index) in project.techStack" :key="index" class="tech-icon mx-2">
                        <i :class="tech.techClass" :title="tech.techName"></i>
                        </span>
                    </div>
                    <div class="flex justify-center gap-3 pt-3">
                        <a v-for="(data, index) in project.links" :key="index" :href="data.routes" target="_blank" class="text-gray-400 hover:text-white dark:hover:text-gray-800 lg:text-xl">
                            <i :class="data.icon "></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.grid-container {
@apply grid gap-8 lg:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-28;
  margin: auto;
}

.card:hover h2 {
@apply text-blue-500 duration-150
}

.tech-icon {
@apply text-2xl;
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