<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="card">
    <slot />
    <h3 class="text-lg">{{ title }}</h3>
    <p class="text-g">{{ body }}</p>
  </li>  
</template>

<style>
:root {
  --accent-gradient: linear-gradient(45deg, #42d392, #647eff 30%, rgb(47, 47, 47) 60%);
}
  
.card {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-image: var(--accent-gradient);
  background-size: 400%;
  color: white;
  border-radius: 0.5rem;
  background-position: 100%;
  transition: background-position 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

svg {
  margin-bottom: 1rem;
}

h2 {
  transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:is(:hover, :focus-within) {
  background-position: 0;
  @apply text-slate-900;
}
</style>
