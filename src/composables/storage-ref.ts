import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { UseStorageOptions } from '@vueuse/core'

export function useStorageRef<T>(
  storeName: string,
  key: string,
  value: T,
  options?: UseStorageOptions<T>
) {
  return ref(useLocalStorage(`nd-${storeName}-${key}`, value, options))
}
