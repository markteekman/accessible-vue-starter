<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container py-4">
      <p>&copy; {{ currentYear }} - Starter Theme for <a href="https://vuejs.org/">Vue 3</a> and <a href="https://vitejs.dev/">Vite</a>.</p>
    </div>
  </footer>
</template>