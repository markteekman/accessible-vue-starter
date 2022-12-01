<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head'
import { useProjectStore } from '~/stores/project'
import { onIntersect } from '~/composables/onIntersect'
import IconAccessibility from '~icons/carbon/accessibility-alt'

const count = ref(0)
const store = useProjectStore()
const newTagline = ref('')
const observer = ref({})
const scrollRef = ref({})

const handleSubmit = () => {
  store.updateProjectTagline(newTagline.value)
  newTagline.value = ''
}

const onEnter = () => {
  scrollRef.value.classList.add('is-visible')
}

const onLeave = () => {
  scrollRef.value.classList.remove('is-visible')
}

onMounted (() => {
  observer.value = onIntersect(scrollRef.value, onEnter, onLeave, false, {
    threshold: 0.35
  })
})

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
    <div class="animate align-center gap-8">
      <MagicText>
        <template #magic>
          {{ store.projectTagline.main }}
        </template>
        {{ store.projectTagline.sub }}
      </MagicText>
      <div class="flex flex-col gap-2">
        <label for="favorite-pokemon" class="font-bold uppercase">Who's your favorite Pokémon?</label>
        <input class="text-slate-900 p-2 rounded-md border-none text-lg" name="favorite-pokemon" type="text" v-model="newTagline">
        <button @click="handleSubmit" class="button">I choose you!</button>
      </div>
      <button class="text-white button" type="button" @click="count++">Persistant count: {{ count }}</button>
    </div>
  </div>
  <div class="container">
    <div class="align-center">
      <p class="text-sm uppercase scroll">Scroll</p>
    </div>
  </div>
  <div class="container mt-32 mb-48 animate">
    <h2 class="text-center text-6xl mb-12">Features</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="scrollRef">
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
        title="VueUse"
        body="A collection of essential Vue Composition API utilities."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Auto Components"
        body="Components are automatically imported and registered using Unplugin Vue Components."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Icons"
        body="Unplugin Icons comes preinstalled with a bunch of icons out of the box."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Vite Pages"
        body="Automatic routing and code-splitting for your pages using Vite Plugin Pages."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Vite Layouts"
        body="Create and reuse layouts for your pages using Vite Plugin Layouts."
      >
        <i-carbon-accessibility-alt class="block text-4xl" />
      </BasicCard>
      <BasicCard
        title="Design System"
        body="Use the included design system utilities to build your own components and layouts."
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

<style lang="scss">
.animate > * {
  opacity: 0;
  transform: translateY(-3rem);
  animation: fade-in 0.5s ease-in-out forwards;
}

ul {
  li.card {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-20px);

    @for $i from 1 through 100 {
      &:nth-child(#{$i}) {
        transition-delay: #{$i * .1}s;
      }
    }
  }
}

.scroll::after {
  content: '';
  display: block;
  margin-top: 1rem;
  margin-left: 50%;
  width: 1px;
  height: 100px;
  background-color: rgb(255, 255, 255, 0.2);
}

.is-visible {
  li.card {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0px);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
