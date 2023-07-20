<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps<{
  expanded: boolean
}>()

defineEmits(['hideOffCanvas'])

</script>

<template>

  <Transition name="fade">
    <div class="nd-off-canvas-overlay" v-if="expanded" @click="$emit('hideOffCanvas')"></div>
  </Transition>

  <div class="nd-off-canvas" :class="{ 'nd-off-canvas--expanded': expanded }">
    <span class="nd-off-canvas-close" @click="$emit('hideOffCanvas')">
      <FontAwesomeIcon :icon="['fas', 'angles-left']" />
    </span>
  </div>

</template>

<style scoped lang="scss">
@import '../assets/styles/vars';

$transition: 0.2s ease-out;

.nd-off-canvas {
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $clr-black;
  color: $clr-white;
  padding: 2rem;
  overflow-x: hidden;
  transform: translateX(-100%);
  transition: transform $transition, box-shadow $transition;

  &--expanded {
    transform: none;
    box-shadow: 12px 0px 20px 0px rgba(0, 0, 0, 0.3);
  }
}

.nd-off-canvas-overlay {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  background-color: $clr-black;
  opacity: 0.5;
  transition: opacity $transition;

  &.fade-enter-active {
    animation: fade-in $transition;
  }

  &.fade-leave-active {
    animation: fade-in $transition reverse;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.5;
    }
  }
}
</style>