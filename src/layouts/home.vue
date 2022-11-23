<template>
  <TheHeader />
  <main id="main-content">
    <router-view />
  </main>
  <TheFooter />
</template>

<style scoped>
  main {
    display: grid;
    place-items: center;
    grid-gap: 3rem;
  }
</style>
