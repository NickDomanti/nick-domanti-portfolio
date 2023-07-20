import { useRouter } from "vue-router"

export function useRoutes() {
  return useRouter().getRoutes().filter(r => !r.meta.hideNavigation)
}