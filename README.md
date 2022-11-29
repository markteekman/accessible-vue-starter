# Accessible Vue Starter

This starter project is build using [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/). To help you build your project *faster*, this theme includes some dedicated accessible components (such as a keyboard accessible and responsive navigation) and several components coming from the [Accessible Vue Components](https://github.com/markteekman/accessible-vue-components) npm package. This theme also includes example pages, a blog with dynamic routes, a custom 404 page and many **Design System** utility classes, patterns and primatives (such as grids, buttons, lists, spacings, sizes and more).

> _**NOTE:** This package is still in it's early stages of development, and will be further enhanced in the future. You can use in in production, however do note that there may still be some things missing. This project is inspired by the Accessible Astro Starter and will be developed in the same way, but for Vue._

[Live demo](https://accessible-vue.dev)

## Getting started
Run the following commands in your project folder to get started:
```console
npm install && npm run dev
```

## Accessibility features

- Accessible landmarks such as `header`, `main`, `footer`, `section` and `nav`
- Outline focus indicator which works on dark and light backgrounds
- Several `aria` attributes which provide a better experience for screen reader users
- `SkipLinks.vue` component to skip to either the main menu or the main content *
- `TheNavigation.vue` component with keyboard accessible (dropdown) navigation (arrow keys, escape key)
- `ResponsiveToggle.vue` component with an accessible responsive toggle button for the mobile navigation
- `DarkMode.vue` component toggle with accessible button and a user system preferred color scheme *
- `Header.vue` component included in the `DefaultLayout.astro` layout
- `Footer.vue` component included in the `DefaultLayout.astro` layout
- `.sr-only` utility class for screen reader only text content (hides text visually)
- `prefers-reduced-motion` disables animations for users that have this preference turned on

**Provided by the Accessible Vue Components package.*

## Extra features

- `404.astro` provides a custom 404 error page which you can adjust to your needs
- [Accessible Vue Components](https://github.com/markteekman/accessible-vue-components) package comes preinstalled with extra components such as Accordions, Modals and Notifications

## Getting started
After cloning this repository to your local machine, use the following commands:

### Install dependencies
```console
npm install
```

### Run development server
```console
npm run vite
```
*Exposes the development server on [http://127.0.0.1:5173/](http://127.0.0.1:5173/).*

### Run build
```console
npm run build
```
*Builds your project in the `/dist` folder.*

### Preview build
```console
npm run preview
```
*Exposes your `/dist` folder on a server for preview at [http://localhost:5000](https://localhost:5000).*

## Building your project
The Vite template is designed to automate and enhance a lot of workflows, such as auto registration of components and routes, thanks to plugins such as [Unplugin Vue Components](https://github.com/antfu/unplugin-vue-components), [Unplugin Icons](https://github.com/antfu/unplugin-icons), [Vite Plugin Pages](https://github.com/hannoeru/vite-plugin-pages) and [Vite Plugin Vue Layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts), [Vue Router](https://router.vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), [Pinia Stores](https://pinia.vuejs.org/) and [Vue Use](https://vueuse.org/).

### /src/components
This is where you build your components. Once you've made a component it's automatically globally available, without the need to import them in parent components.

### /src/pages
This is where you create your page components. Once you've made a page it's automatically registered in the Vue Router. Make sure you change the page title in `index.vue` to something related to the project.

### /src/stores
Pinia is used as the default State Manager. This is also the place where you can set the name of the project.

### /public
Images and static assets are loaded from the `/public` folder. Be sure to change the logo and favicon to that of your project.

### index.html
You can customize the Open Graph data in the `index.html` file and also specify any Google Fonts, which in turn, you can declare in `index.css`.

### Accessible Vue Components
Components from the `accessible-vue-components` package are globally installed as a plugin. This means you **don't** have to import them manually.

❌ Don't do this:
```vue
<script setup>
import SkipLinks from 'accessible-vue-components'
</script>

<template>
  <SkipLinks />
</template>
```

✅ Instead, just call the component without importing it:
```vue
<template>
  <SkipLinks />
</template>
```