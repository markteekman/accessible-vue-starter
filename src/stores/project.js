import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projectName: 'Accessible Vue Starter'
  })
})
