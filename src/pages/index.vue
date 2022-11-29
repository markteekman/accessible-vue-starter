<script setup>
import { ref } from 'vue';
import { useHead } from '@vueuse/head'
import { useProjectStore } from '~/stores/project'
import IconAccessibility from '~icons/carbon/accessibility-alt'

const count = ref(0)
const store = useProjectStore()
const newTagline = ref('')

const handleSubmit = () => {
  store.updateProjectTagline(newTagline.value)
  newTagline.value = ''
}

useHead({
  title: `${store.projectName} | Homepage`,
  meta: [
    {
      name: 'description',
      content: 'An Accessible Starter Theme for Vue 3 + Vite including accessiblity features such as landmarks, better focus-outline and skip-links navigation.'
    }
  ]
})
</script>

<template>
  <div class="container mt-32">
    <div class="align-center gap-8">
      <MagicText>
        <template #magic>
          {{ store.projectTagline.main }}
        </template>
        {{ store.projectTagline.sub }}
      </MagicText>
      <div>
        <label for="favorite-pokemon">Who's your favorite Pokémon?</label>
        <input class="text-slate-900" name="favorite-pokemon" type="text" v-model="newTagline">
        <button @click="handleSubmit">I choose you!</button>
      </div>
      <button class="text-white button" type="button" @click="count++">Persistant count: {{ count }}</button>
    </div>
  </div>
  <div class="container my-32">
    <h2 class="text-center text-6xl mb-12">Features</h2>
    <ul class="grid grid-cols-4 gap-8">
      <BasicCard
        title="Accessibility"
        body="Landmarks, better focus-outline and skip-links navigation."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Vite"
        body="Vite is a new build tool that significantly improves the frontend development experience."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Tailwind CSS"
        body="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Vueuse"
        body="A collection of essential Vue Composition API utilities."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Unplugin Vue Components"
        body="A Vite plugin that automatically imports Vue components in your code."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Unplugin Icons"
        body="A Vite plugin that automatically imports SVG icons in your code."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Vite Plugin Pages"
        body="A Vite plugin that automatically imports pages in your code."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Vite Plugin Vue Layouts"
        body="A Vite plugin that automatically imports layouts in your code."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
