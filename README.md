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
- (coming soon) `ResponsiveToggle.vue` component with an accessible responsive toggle button for the mobile navigation
- (coming soon) `DarkMode.vue` component toggle with accessible button and a user system preferred color scheme *
- `TheHeader.vue` component included in the `default.vue` layout
- `TheFooter.vue` component included in the `default.vue` layout
- `.sr-only` utility class for screen reader only text content (hides text visually)
- `prefers-reduced-motion` disables animations for users that have this preference turned on

**Provided by the Accessible Vue Components package.*

## Extra features

- (coming soon) Blog with dynamic routes
- (coming soon) Forms using [FormKit](https://formkit.com/)
- `404.astro` provides a custom 404 error page which you can adjust to your needs
- [Accessible Vue Components](https://github.com/markteekman/accessible-vue-components) package comes preinstalled with extra components such as Accordions, Modals and Notifications
- Design system utilities which includes a lot of utility classes, patterns and primitives such as grids, buttons, lists, spacings, sizes and more
- Auto component registration using [Unplugin Vue Components](https://github.com/antfu/unplugin-vue-components)
- Pages and auto routes using [Vite Plugin Pages](https://github.com/hannoeru/vite-plugin-pages)
- Reusable layouts using [Vite Plugin Layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- Stores and statemanagement using [Pinia](https://pinia.vuejs.org/)
- Icons provided by [Unplugin Icons](https://github.com/antfu/unplugin-icons)
- [Tailwind CSS](https://tailwindcss.com/) for styling

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
The Vite template is designed to automate and enhance a lot of workflows, such as auto registration of components and routes.

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

## Build in design system utilities

This starter contains some extra **Design System** like utility classes to aid in the global layout of your project. All of this can be found in the `src/assets/scss/base` directory, and compiles in the `src/assets/globals.scss` file. Using these primitives is totally optional, use or remove at your own preference :) What it contains:

- Reset file to reset browser defaults and ensure everything looks good
- Some basic font settings, such as responsive heading sizes
- Color shades for your color pallet, rendered to the `:root` of your website as custom properties
- Simple auto-grid setting using `display: grid` and a `data-attribute`
- Basic styling for `a` tags, `ul` and `ol` lists

### Alignment

Alignment classes can be used to align elements in your HTML. There's `align-center`, `align-horizontal` and `align-vertical`.

```html
<div class="align-center">
  <h1>Center me on the screen!</h1>
</div>
```

### Animations

There are a couple of basic animations which you can throw on your HTML elements like `blink`, `fade-in`, `pop-up` and `spin`. You can also use some animation delays to create different effects.

```html
<div data-animation="fade-in">
  <p>I've got a fancy fade-in animation that starts right away.</p>
</div>
<div data-animation="fade-in" data-animation-delay="0.25s">
  <p>I've got a fancy fade-in animation after 0.25s.</p>
</div>
<div data-animation="fade-in" data-animation-delay="0.5s">>
  <p>I've got a fancy fade-in animation after 0.5s.</p>
</div>
```

### Auto Grid

Simply apply the `data-auto-grid` attribute on your parent `div` with a number from 2-6 (if you need more columns just tweak the for loop in `_auto-grid.scss`). The grid automatically creates new rows (this is how `display: grid` works by default).

```html
<div class="container" data-auto-grid="3">
  <p>First column</p>
  <p>Second column</p>
  <p>Third column</p>
</div>
```

You can also center the contents of the cell using the `data-grid-center` attribute. Use it together with `data-auto-grid`.

```html
<div class="container" data-auto-grid="3" data-grid-center>
  <!-- ... -->
</div>
```

### Borders

Basic border utility mixin to use in your SCSS files. Simply import the mixin in your component and use it like this:

```scss
<style lang="scss">
  .my-element {
    @include border-medium(red);
  }
</style>
```

### Buttons

A Button primitive to easily apply button styles to your `<button>` and `<a>` tags. Simply apply the class `button` to your element. There are different variations in colors (`color-secondary`, `color-info`, `color-success`, `color-warning`, `color-error`) which is primary by default, sizing (`size-tiny`, `size-large`, `size-huge`) which is medium by default and behavior (`behavior-full`) which stretches the button to 100% width.

```html
<a href="/" class="button color-success size-huge behavior-full">
  Click me to go to space!
</a>
```

### Colors

You can setup your own color schemes in the `_colors.scss` file. You'll find a SCSS map, which gets printed inside `_root.scss` as custom properties. There are also several color utilities such as `text-primary-#` and `bg-neutral-#` based on all colors you've defined. `text-primary-#` should be used on a parent element to give the child's the respective color.

```scss
$colors: (
  primary: (
    100: hsl(262, 90%, 95%),
    200: hsl(262, 100%, 88%),
    300: hsl(262, 100%, 78%),
    400: hsl(268, 82%, 60%),
    500: hsl(273, 79%, 48%),
  ),
  // ...
);
```

```html
<div class="text-neutral-100 bg-neutral-900 space-32">
  <p>Dark background with white text on it!</p>
</div>
```

### Elevations

Use elevations on your HTML elements to add a box shadow of different intensities. Use either `elevation-100`, `elevation-200`, `elevation-300`, `elevation-400` or `elevation-500`.

```html
<div class="space-32 radius-large elevation-400">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
```