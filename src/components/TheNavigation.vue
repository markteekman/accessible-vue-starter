<script setup>
import IconAccessibility from '~icons/carbon/accessibility-alt'
</script>

<template>
  <div class="container flex justify-between py-4">
    <div class="logo">
      <router-link to="/">
        <i-carbon-accessibility-alt class="block text-4xl" />
      </router-link>
    </div>
    <ul class="flex gap-4">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/example-page">Example page</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.logo a {
  color: white;

  &:hover,
  &:focus {
    color: var(--action-color);
  }
}

.router-link-active {
  color: white;
  text-decoration: underline;
}
</style>
