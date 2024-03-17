<script setup lang="ts">
import { AnimateClass } from '@/types/animate-class';
import { AnimateClassSpeed } from '@/types/animate-class-speed';

interface Props {
  animation: string
  speed?: AnimateClassSpeed
  delay?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  speed: AnimateClassSpeed.Normal,
  delay: '0s',
  disabled: false
})

defineEmits<{
  (event: 'after-appear', el: HTMLElement): void
}>()

const animateClass = new AnimateClass(props.animation, props.speed)
</script>

<template>
  <template v-if="disabled">
    <slot></slot>
  </template>
  <template v-else>
    <Transition
      appear
      :enter-active-class="animateClass.toString()"
      @after-appear="(el) => $emit('after-appear', el as HTMLElement)"
    >
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
