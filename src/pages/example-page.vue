<script setup>
import { useHead } from '@vueuse/head'
import { useProjectStore } from '~/stores/project'

useHead({
  title: `Example page | ${useProjectStore().projectName}`,
  meta: [
    {
      name: 'description',
      content: 'This is an example page.'
    }
  ]
})
</script>

<template>
  <section class="pt-16 pb-8">
    <div class="container space-content">
      <h1>Example Page</h1>
      <p>This is an example page.</p>
    </div>
  </section>
</template>