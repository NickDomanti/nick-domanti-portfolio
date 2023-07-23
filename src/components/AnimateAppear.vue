<script setup lang="ts">

import AnimateClass from '@/models/animate-class'
import AnimateClassSpeed from '@/models/animate-class-speed'

interface Props {
  animation: string,
  speed?: AnimateClassSpeed,
  delay?: string,
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  speed: AnimateClassSpeed.Normal,
  delay: '0s',
  disabled: false
})

defineEmits<{
  (event: 'after-appear', el: HTMLElement): void
}>()

</script>

<template>
  <template v-if="disabled">
    <slot></slot>
  </template>
  <template v-else>
    <Transition
      appear
      :enter-active-class="new AnimateClass(animation, speed).toString()"
      @after-appear="el => $emit('after-appear', el)">
      <div class="nd-appear-animated">
        <slot></slot>
      </div>
    </Transition>
  </template>
</template>

<style scoped>
.nd-appear-animated {
  animation-delay: v-bind(delay);
}
</style>