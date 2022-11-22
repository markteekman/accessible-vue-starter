<script setup>
import { onMounted, ref } from 'vue';
import IconAccessibility from '~icons/carbon/accessibility-alt'

const count = ref(0)
</script>

<template>
  <header>
    <SkipLinks />
  </header>
  <main>
    <MagicText>
      <template #magic>
        Accessible
      </template>
        Vue Starter
    </MagicText>
    <i-carbon-accessibility-alt style="display: block; font-size: 10rem;" />
    <button type="button" @click="count++">count is {{ count }}</button>
  </main>
</template>

<style>
  main {
    display: grid;
    place-items: center;
    grid-gap: 3rem;
  }
</style>
