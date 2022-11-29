import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projectName: 'Accessible Vue Starter',
    projectDescription: 'A starter template for accessible Vue 3 apps',
    projectTagline: {
      main: 'Accessible',
      sub: 'Vue Starter',
    }
  }),
  actions: {
    updateProjectTagline(newTagline) {
      this.projectTagline.main = newTagline
      this.projectTagline.sub = 'is the best!'
    }
  }
})
