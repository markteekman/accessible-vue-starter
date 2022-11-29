<script setup>
import { useHead } from '@vueuse/head'
import { useProjectStore } from '~/stores/project'

useHead({
  title: `Page not found | ${useProjectStore().projectName}`,
  meta: [
    {
      name: 'description',
      content: 'This page does not exist.'
    }
  ]
})
</script>

<template>
  <section class="pt-16 pb-8">
    <div class="container space-content">
      <h1>404</h1>
      <p>Page not found. <a href="/">Go back home</a>, explorer!</p>
    </div>
  </section>
</template>
