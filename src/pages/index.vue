<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head'
import { useProjectStore } from '~/stores/project'
import { onIntersect } from '~/composables/onIntersect'
import IconAccessibility from '~icons/carbon/accessibility-alt'

const count = ref(0)
const store = useProjectStore()
const newTagline = ref('')
const observer = ref({})
const scrollRef = ref({})

const features = [
  { icon: '♿', title: 'Accessible by default', body: 'Landmarks, better focus-outline and skip-links navigation.' },
  { icon: '🔌', title: 'Accessible Components', body: 'Ready to use, accessible Vue components, provided by separate package.' },
  { icon: '🌈', title: 'Tailwind CSS', body: 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90.' },
  { icon: '⚡', title: 'Vite', body: 'Vite is a new build tool that significantly improves the frontend deovelopment experience.' },
  { icon: '✨', title: 'Latest Vue', body: 'Uses the latest Vue features such as the Composition API and script setup.' },
  { icon: '🧰', title: 'VueUse', body: 'A collection of essential Vue Composition API utilities.' },
  { icon: '🍍', title: 'Pinia', body: 'State Management using Pinia Stores.' },
  { icon: '📦', title: 'Auto Components', body: 'Components are automatically imported and registered using Unplugin Vue Components.' },
  { icon: '😃', title: 'Icons', body: 'Unplugin Icons comes preinstalled with a bunch of icons out of the box.' },
  { icon: '📂', title: 'Vite Pages', body: 'Automatic routing and code-splitting for your pages using Vite Plugin Pages.' },
  { icon: '🗂', title: 'Vite Layouts', body: 'Create and reuse layouts for your pages using Vite Plugin Layouts.' },
  { icon: '🧩', title: 'Design System', body: 'Use the included design system utilities to build your own components and layouts.' }
]

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
    threshold: 0.15
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
      <div class="flex flex-col gap-2 mt-12">
        <label for="favorite-pokemon" class="font-bold uppercase">Who's your favorite Pokémon?</label>
        <input class="text-white bg-transparent p-2 rounded-md border-solid text-lg" name="favorite-pokemon" type="text" v-model="newTagline">
        <button @click="handleSubmit" class="button">I choose you!</button>
      </div>
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
        v-for="feature in features"
        :key="feature.title"
        :icon="feature.icon"
        :title="feature.title"
        :body="feature.body"
      />
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
