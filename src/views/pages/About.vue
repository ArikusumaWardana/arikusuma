<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    import image from '@/assets/photo.jpg'

    const route = useRoute()

    document.title = 'Arikusuma | ' + route.meta.title

    const descAbout = ref([
        {paragraph: '\n' +
            'Halo, Nama saya Arik, seorang mahasiswa di Kampus Primakara yang sedang mendalami jurusan Informatika. Sebelumnya, saya adalah lulusan SMK Negeri 1 Denpasar dengan jurusan Rekayasa Perangkat Lunak atau bisa disingkat RPL. Awalnya, saya sempat merasa ragu dengan pilihan jurusan ini karena coding terasa asing dan membingungkan bagi saya. Terlebih lagi, saya merasa agak lambat tertarik di bidang ini, baru mulai merasakan minat yang sebenarnya ketika saya duduk di kelas 2. Namun, seiring berjalannya waktu, terutama setelah belajar membuat website, saya mulai melihat coding sebagai sesuatu yang seru dan penuh tantangan.'},
        {paragraph: 'Di tahun pertama SMK, sebenarnya saya sudah dikenalkan dengan coding, tapi sebatas melalui terminal saja. Bagi saya saat itu, kegiatan tersebut cukup membosankan dan sulit dimengerti, apalagi dengan kondisi pandemi COVID-19 yang membuat pembelajaran dilakukan secara online dari rumah. Kurangnya interaksi langsung dengan teman maupun guru semakin membuat saya kesulitan memahami materi. Rasanya saya seperti belajar sendirian di rumah tanpa dukungan yang cukup, dan hal ini membuat saya sempat merasa jurusan ini mungkin tidak cocok untuk saya. Namun, ketika kelas 2 dan mulai ada kesempatan tatap muka, saya mendapatkan pelajaran baru tentang membuat website, dan itu menjadi titik balik. Akhirnya, saya menyadari bahwa coding tidak sekadar menulis kode di terminal; ada kreativitas di dalamnya, terutama saat melihat hasil karya sendiri di layar.'},
        {paragraph: 'Sekarang, di Kampus Primakara, saya terus menekuni jurusan informatika dengan tekad untuk lebih mendalami dunia coding dan teknologi. Saya juga ikut serta dalam beberapa organisasi di kampus, walaupun tidak bisa dibilang sangat aktif. Saya lebih memilih untuk mengikuti organisasi dan kegiatan yang menurut saya menarik dan bermanfaat. Melalui berbagai pengalaman ini, saya berharap bisa terus mengembangkan kemampuan coding saya dan mengaplikasikannya dalam dunia nyata, dengan harapan suatu saat bisa menciptakan sesuatu yang bermanfaat bagi orang lain.'}
    ])
</script>

<template>
    <div class="about-container bg-gray-900 dark:bg-gray-100 text-white flex flex-col items-center py-24 px-4 sm:px-8 lg:px-10 duration-150">
        <div class="image-container text-center mb-6">
            <img :src="image" alt="Profile Picture" class="profile-image rounded-lg max-w-full w-72 mx-auto" />
            <p class="image-caption mt-4 text-sm text-white dark:text-gray-700">
                Foto diambil saat sedang berkuliah di
                <br />
                <strong>Primakara University</strong>
            </p>
        </div>
        <div class="text-container max-w-3xl text-justify">
            <h1 class="text-4xl font-bold mb-6 text-white dark:text-gray-700">About Me</h1>
            <p v-for="(data, index) in descAbout" :key="index" class="mb-4 lg:text-lg text-white dark:text-gray-700">
                {{ data.paragraph }}
            </p>
        </div>
    </div>
</template>
