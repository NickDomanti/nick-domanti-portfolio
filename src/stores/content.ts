import { useSupabase } from '@/composables/supabase'
import { Database } from '@/types/database'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type Work = Database['public']['Tables']['works']['Row']

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
