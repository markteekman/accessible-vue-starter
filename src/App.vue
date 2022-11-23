<script setup>
import { ref } from 'vue';
import IconAccessibility from '~icons/carbon/accessibility-alt'

const count = ref(0)
</script>

<template>
  <header>
    <SkipLinks />
  </header>
  <main id="main-content" class="container h-screen">
    <div class="align-center gap-8">
      <MagicText>
        <template #magic>
          Accessible
        </template>
          Vue Starter
      </MagicText>
      <i-carbon-accessibility-alt style="display: block; font-size: 10rem;" />
      <button class="text-white button" type="button" @click="count++">count is {{ count }}</button>
    </div>
  </main>
</template>

<style>
  main {
    display: grid;
    place-items: center;
    grid-gap: 3rem;
  }
</style>
