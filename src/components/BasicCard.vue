<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
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
    <span class="icon">
      {{ icon }}
    </span>
    <h3 class="text-2xl">{{ title }}</h3>
    <p class="text-lg">{{ body }}</p>
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
  align-items: flex-start;
  position: relative;
  padding: 2rem;
  border-radius: 0.5rem;
  color: white;
  transition: 
    opacity 0.5s ease-in-out,
    filter 0.5s ease-in-out,
    transform 0.5s ease-in-out,
}

.card > * {
  z-index: 2;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  background-image: var(--accent-gradient);
  background-size: 800%;
  background-position: 100%;
  transition: color 0.4s ease-in-out, background-position 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.icon {
  display: flex;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.1);
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 6px;
}

h2 {
  transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:is(:hover, :focus-within) {
  @apply text-slate-900;
}

.card:is(:hover, :focus-within)::before {
  background-position: 0;
}
</style>
