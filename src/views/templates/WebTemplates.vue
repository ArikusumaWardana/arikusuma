<script setup>

  import Header from '@/components/layout/header.vue';
  import Footer from '@/components/layout/footer.vue';

</script>

<template>
  <Header />

  <transition name="slide-fade" mode="out-in">
    <RouterView />
  </transition>

  <Footer />

</template>


<style scoped>
  
.slide-fade-enter-active, .slide-fade-leave-active {
  @apply transition-transform transition-opacity duration-700;
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

</style>