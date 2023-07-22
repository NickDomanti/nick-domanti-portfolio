<script setup lang="ts">

import AnimateClass from '@/models/animate-class'
import AnimateClassSpeed from '@/models/animate-class-speed'

interface Props {
  animation: string,
  speed?: AnimateClassSpeed,
  delay?: string
}

withDefaults(defineProps<Props>(), {
  speed: AnimateClassSpeed.Normal,
  delay: '0s'
})

defineEmits<{
  (event: 'after-appear', el: Element): void
}>()

</script>

<template>
  <Transition
    appear
    :enter-active-class="new AnimateClass(animation, speed).toString()"
    @after-appear="el => $emit('after-appear', el)">
    <div class="nd-appear-animated">
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped>
.nd-appear-animated {
  animation-delay: v-bind(delay);
}
</style>