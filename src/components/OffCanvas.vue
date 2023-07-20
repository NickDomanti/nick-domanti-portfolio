<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
  expanded: boolean
}>()

defineEmits(['hideOffCanvas'])

</script>

<template>
  <div class="nd-off-canvas" :class="{ 'nd-off-canvas--expanded': expanded }">
    <span class="nd-off-canvas-close" @click="$emit('hideOffCanvas')">
      <FontAwesomeIcon :icon="['fas', 'angles-left']" />
    </span>
  </div>

  <div class="nd-off-canvas-overlay"></div>
</template>

<style scoped lang="scss">
@import '../assets/styles/vars';

$transition: 1s ease-out;

.nd-off-canvas {
  height: 100vh;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: $clr-black;
  overflow-x: hidden;
  transition: transform $transition;
  color: $clr-white;
  padding: 1rem 2rem;
  transform: translateX(-100%);

  &--expanded {
    transform: none;

    & + .nd-off-canvas-overlay {
      // z-index: 1;
      opacity: 0.8;
    }
  }
}

.nd-off-canvas-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $clr-black;
  opacity: 0;
  z-index: -1;
  transition: opacity $transition;
}
</style>