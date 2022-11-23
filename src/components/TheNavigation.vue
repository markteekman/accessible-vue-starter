<template>
  <div class="container flex justify-between py-4">
    <div class="logo">
      <router-link to="/">
        <img src="/vite.svg" alt="" />
      </router-link>
    </div>
    <ul class="flex gap-4">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/example-page">Example page</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
.router-link-active {
  font-weight: bold;
}
</style>
