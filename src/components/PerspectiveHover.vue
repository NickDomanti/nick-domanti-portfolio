<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const el = ref(null)

const { elementX, elementY, elementWidth, elementHeight, isOutside } =
  useMouseInElement(el)

const transform = computed(() => {
  if (isOutside.value) return ''

  const MAX_ROTATION = 6

  const rx = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2)
  const ry = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2)

  return `perspective(${
    elementWidth.value * 1.5
  }px) rotateX(${rx}deg) rotateY(${ry}deg)`
})
</script>

<template>
  <div ref="el" class="nd-perspective-hover">
    <slot></slot>
  </div>
</template>

<style scoped>
.nd-perspective-hover {
  transform: v-bind(transform);
  transition: transform 0.2s ease-out;
}
</style>
