import { useSupabase } from '@/composables/supabase'
import { Project } from '@/types/project'
import { Work } from '@/types/work'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const texts = ref<Record<string, string>>({})
  const works = ref<Work[]>([])
  const projects = ref<Project[]>([])

  const { getTexts, getWorks, getProjects } = useSupabase()
  const populateContent = async () => {
    texts.value = await getTexts()
    works.value = await getWorks()
    projects.value = await getProjects()
  }

  return { texts, works, projects, populateContent }
})
