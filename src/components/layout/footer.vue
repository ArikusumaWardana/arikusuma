<script setup>

import logo from '@/assets/logo-a.png'

</script>

<template>
  <footer class="bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-700 py-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <div class="flex flex-col items-center md:items-start">
        <img :src="logo" alt="Logo" class="h-10 w-10 mb-2">
        <h2 class="text-xl font-semibold">Arikusuma Wardana</h2>
        <p class="text-gray-400 text-sm">Your go-to platform for amazing services.</p>
      </div>

      <div class="flex flex-col items-center md:items-start">
        <h3 class="text-lg font-semibold">Follow Us</h3>
        <div class="mt-2 flex space-x-4">
          <a href="#" class="hover:text-gray-400"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.53 0-10 4.48-10 10 0 4.42 2.89 8.19 6.84 9.5.5.1.69-.22.69-.5v-1.76c-2.76.6-3.34-1.28-3.34-1.28-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.54 1.03 1.54 1.03.89 1.52 2.34 1.08 2.9.83.09-.64.35-1.08.63-1.32-2.21-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.28.1-2.66 0 0 .83-.27 2.72 1.03A9.49 9.49 0 0 1 12 6.8a9.5 9.5 0 0 1 2.48.33c1.88-1.3 2.72-1.03 2.72-1.03.55 1.38.2 2.41.1 2.66.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.68-4.57 4.92.36.31.68.91.68 1.84v2.72c0 .28.18.61.69.5 3.95-1.31 6.84-5.08 6.84-9.5 0-5.52-4.47-10-10-10z"/></svg></a>
          <a href="#" class="hover:text-gray-400"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.62 2H4.38A2.38 2.38 0 0 0 2 4.38v15.24A2.38 2.38 0 0 0 4.38 22h15.24A2.38 2.38 0 0 0 22 19.62V4.38A2.38 2.38 0 0 0 19.62 2zM7.51 18.47H4.67V9.53h2.84v8.94zm-1.42-10.2a1.64 1.64 0 1 1 0-3.28 1.64 1.64 0 0 1 0 3.28zm12.6 10.2h-2.84v-4.73c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.81 1.22-1.81 2.48v4.83h-2.84V9.53h2.73v1.22h.04a3 3 0 0 1 2.7-1.48c2.88 0 3.42 1.89 3.42 4.35v5.86z"/></svg></a>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center text-gray-400 text-sm">
      &copy; 2024 Arikusuma Wardana. All rights reserved.
    </div>
  </footer>
</template>
