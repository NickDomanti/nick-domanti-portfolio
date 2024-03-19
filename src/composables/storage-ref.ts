import type { UseStorageOptions } from '@vueuse/core'
import { useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'

export function useStorageRef<T>(
  storeName: string,
  key: string,
  value: T,
  options?: UseStorageOptions<T>
) {
  return ref(useLocalStorage(`nd-${storeName}-${key}`, value, options))
}
