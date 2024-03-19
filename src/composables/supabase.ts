import { Database } from '@/types/database'
import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient<Database>(
  process.env.VUE_APP_SUPA_URL!,
  process.env.VUE_APP_SUPA_KEY!
)

export const useSupabase = () => {
  const getTexts = async () => {
    const resp = await supabaseClient.from('texts').select()

    if (!resp.data) throw new Error('No data from Supabase')

    return resp.data.reduce((acc, curr) => {
      acc[curr.key] = curr.text
      return acc
    }, {} as Record<string, string>)
  }

  const getWorks = async () => {
    const resp = await supabaseClient
      .from('works')
      .select()
      .order('index', { ascending: false })

    if (!resp.data) throw new Error('No data from Supabase')

    return resp.data
  }

  const getProjects = async () => {
    const resp = await supabaseClient.from('projects').select().order('index')

    if (!resp.data) throw new Error('No data from Supabase')

    resp.data.forEach((p) => {
      // pre-load all thumbnails
      if (p.thumbnailUrl) new Image().src = p.thumbnailUrl
    })

    return resp.data
  }

  return { supabaseClient, getTexts, getWorks, getProjects }
}
