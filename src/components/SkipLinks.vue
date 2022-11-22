<script setup>
import { ref } from 'vue'

const skipLinks = ref(null)

const setFocusOnElement = (element) => {
  element.setAttribute('tabindex', '-1')
  element.focus()
}

const skipFocusToContent = (event) => {
  const target = skipLinks.value.querySelector('a').getAttribute('href')

  if (document.querySelector(target)) {
    const targetElement = document.querySelector(target)
    setFocusOnElement(targetElement)
  } else if (!document.querySelector(target) && document.querySelector('h1')) {
    const h1 = document.querySelector('h1')
    setFocusOnElement(h1)
  } else if (!document.querySelector(target) && !document.querySelector('h1')){
    const main = document.querySelector('main')
    setFocusOnElement(main)
  } else {
    console.warn('SkipLinks are not set, either missing an h1, main landmark or main content id on the page.')
  }
}
</script>

<template>
  <div class="skip-links" ref="skipLinks">
    <a href="#main-content" class="skip-link" @keydown.enter="skipFocusToContent">Skip to main content</a>
  </div>
</template>

<style lang="scss" scoped>
.skip-links {
  a {
    color: var(--action-color, #222);
    background-color: var(--background, #fff);
    border-bottom-right-radius: 6px;
    padding: 1rem 3.25rem;
    position: absolute;
    display: block;
    z-index: 10;
    top: -100vh;
    left: 0;

    &:hover,
    &:focus {
      top: 0;
      outline-offset: 2px;
    }
  }
}
</style>
