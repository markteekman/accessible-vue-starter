import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Path from 'path'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dirs: [
        'src/components',
        'src/layouts'
      ],
      resolvers: [
        IconsResolver()
      ]
    }),
    Pages(),
    Layouts(),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, 'src')
    }
  }
})
