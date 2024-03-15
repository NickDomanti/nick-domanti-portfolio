import { useSupabase } from '@/composables/supabase'
import { Work } from '@/types/work'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
  const texts = ref<Record<string, string>>({})
  const works = ref<Work[]>([])

  const { getTexts, getWorks } = useSupabase()
  const populateContent = async () => {
    texts.value = await getTexts()
    works.value = await getWorks()
  }

  return { texts, works, populateContent }
})
