<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class=" bg-zinc-900">
    <div class="container py-8">
      <p>&copy; {{ currentYear }} - Starter Theme for <a href="https://vuejs.org/">Vue 3</a> and <a href="https://vitejs.dev/">Vite</a>.</p>
    </div>
  </footer>
</template>