# Accessible Vue Starter

This starter project is build using [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/). To help you build your project *faster*, this theme includes some dedicated accessible components (such as a keyboard accessible and responsive navigation) and several components coming from the [Accessible Vue Components](https://github.com/markteekman/accessible-vue-components) npm package. This theme also includes example pages, a blog with dynamic routes, a custom 404 page and many **Design System** utility classes, patterns and primatives (such as grids, buttons, lists, spacings, sizes and more).

> _**NOTE:** This package is still in it's early stages of development, it's NOT recommended to start using it in production yet! This project is inspired by the Accessible Astro Starter and will be developed in the same way, but for Vue._

[Live demo]() (coming soon)

## Getting started
Run the following commands in your project folder to get started:
```console
npm install && npm run dev
```

## Accessibility features

- Accessible landmarks such as `header`, `main`, `footer`, `section` and `nav`
- Outline focus indicator which works on dark and light backgrounds
- Several `aria` attributes which provide a better experience for screen reader users
- `SkipLinks.astro` component to skip to either the main menu or the main content *
- `Navigation.astro` component with keyboard accessible (dropdown) navigation (arrow keys, escape key)
- `ResponsiveToggle.astro` component with an accessible responsive toggle button for the mobile navigation
- `DarkMode.astro` component toggle with accessible button and a user system preferred color scheme *
- `Header.astro` component included in the `DefaultLayout.astro` layout
- `Footer.astro` component included in the `DefaultLayout.astro` layout
- `.sr-only` utility class for screen reader only text content (hides text visually)
- `prefers-reduced-motion` disables animations for users that have this preference turned on

**Provided by the Accessible Vue Components package.*

## Extra features

- `blog.astro` and `posts/[id].astro` demonstrate the use of dynamic routes and provide a basic blog
- `404.astro` provides a custom 404 error page which you can adjust to your needs
- [Accessible Vue Components](https://github.com/markteekman/accessible-vue-components) package comes preinstalled with extra components such as Accordions, Modals and Notifications