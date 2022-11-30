<script setup>
import { onMounted } from 'vue'

const starsAnimation = () => {
  let index = 0
  let interval = 1000

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  const animate = star => {
    star.style.setProperty('--star-left', `${rand(-10, 100)}%`)
    star.style.setProperty('--star-top', `${rand(-40, 80)}%`)

    star.style.animation = 'none'
    star.offsetHeight
    star.style.animation = ''
  }

  for (const star of document.getElementsByClassName('magic-star')) {
    setTimeout(() => {
      animate(star)
      
      setInterval(() => animate(star), 1500)
    }, index++ * (interval / 4))
  }
}

onMounted(() => {
  starsAnimation()
})
</script>

<template>
  <h1 class="text-7xl text-center">
    <span class="magic">
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
        </svg>
      </span>
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
        </svg>
      </span>
      <span class="magic-star">
        <svg viewBox="0 0 512 512">
        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
        </svg>
      </span>
      <span class="magic-text">
        <slot name="magic" />
      </span>
    </span>
    <slot />
  </h1>
</template>

<style lang="scss">
  .magic {
    display: inline-block;
    position: relative;
  }

  .magic-star {
    --size: clamp(10px, 1vw, 20px);
    animation: scale 1s ease forwards;
    display: block;
    height: var(--size);
    left: var(--star-left);
    position: absolute;
    top: var(--star-top);
    width: var(--size);

    svg {
      animation: rotate 1000ms linear infinite;
      display: block;
      opacity: 0.8;

      path {
        fill: #647eff;
      }
    }
  }

  .magic-text {
    animation: background-pan 3s linear infinite;
    background: linear-gradient(
      to right,
      #42d392,
      #42d392,
      #647eff,
      #42d392
    );
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
    font-family: var(--font-family-special);
  }

  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    
    to {
      background-position: -200% center;
    }
  }

  @keyframes scale {
    from, to {
      transform: scale(0);
    }
    
    50% {
      transform: scale(1);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    
    to {
      transform: rotate(180deg);
    }
  }
</style>