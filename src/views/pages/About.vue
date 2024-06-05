<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()

    document.title = 'Arikusuma | ' + route.meta.title

    const descAbout = ref([
        {paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cumque ipsum recusandae perferendis quidem necessitatibus dolorem nihil? Porro perferendis eligendi repudiandae quis commodi beatae blanditiis voluptatem odit vel reiciendis optio animi at libero tempora, hic deleniti iste itaque corrupti cumque ex ratione iure? Provident, consectetur quam dolorum saepe sit, laboriosam, facilis placeat accusamus optio incidunt asperiores et aperiam maiores quidem.'},
        {paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod sunt, libero suscipit animi aliquid magni numquam quas eum veniam sequi alias deserunt ipsa temporibus error similique necessitatibus. Maiores tenetur dolor inventore quos consequuntur aliquid explicabo nisi impedit sequi quisquam nihil ullam vel distinctio officia at unde ex neque sit cupiditate itaque totam repellendus amet, esse accusantium. Error magni eligendi sit, odit sunt eaque quod iure voluptate cupiditate harum? Atque accusantium voluptatibus placeat maxime labore minima neque tempore molestias eum!'},
        {paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt atque necessitatibus libero beatae iusto soluta, eveniet, voluptate adipisci quisquam reiciendis omnis? Necessitatibus perspiciatis quasi corrupti totam aspernatur sapiente nam! Labore exercitationem aperiam enim ducimus ipsa magnam deserunt incidunt adipisci accusamus consequatur porro cumque culpa, earum atque eum at? Quidem, earum?'}
    ])
</script>

<template>
    <div class="about-container bg-gray-900 dark:bg-gray-100 text-white flex flex-col items-center py-24 px-4 sm:px-8 lg:px-10 duration-150">
        <div class="image-container text-center mb-6">
            <img src="@/assets/photo.jpg" alt="Profile Picture" class="profile-image rounded-lg max-w-full w-72 mx-auto" />
            <p class="image-caption mt-4 text-sm text-white dark:text-gray-700">
                Foto diambil saat sedang berkuliah di
                <br />
                <strong>Primakara University</strong>
            </p>
        </div>
        <div class="text-container max-w-3xl text-justify">
            <h1 class="text-4xl font-bold mb-6 text-white dark:text-gray-700">About Me</h1>
            <p v-for="(data, index) in descAbout" :key="index" class="mb-4 text-white dark:text-gray-700">
                {{ data.paragraph }}
            </p>
        </div>
    </div>
</template>
