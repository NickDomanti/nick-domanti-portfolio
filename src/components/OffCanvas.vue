<script setup lang="ts">

import { useRoutes } from '@/composables/routes'
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
    <div class="nd-off-canvas-header">
      <RouterLink to="/">
        <img src="/img/logo-no-bg.png" />
      </RouterLink>
      <div class="nd-off-canvas-close" @click="$emit('hideOffCanvas')">
        <FontAwesomeIcon :icon="['fas', 'angles-left']" />
      </div>
    </div>
    
    <div class="nd-nav-link-wrapper" v-for="route in useRoutes()" :key="route.path">
      <RouterLink :to="route.path" class="nd-nav-link">{{ route.name }}</RouterLink>
    </div>
    
    <div class="nd-nav-link-wrapper">
      <a class="nd-nav-link nd-nav-link--icon"
        href="https://github.com/NickDomanti/nick-domanti-portfolio"
        title="See this website's source code"
        target="_blank">
        <FontAwesomeIcon :icon="['fab', 'github']" />
      </a>
    </div>
    
    <div class="nd-nav-link-wrapper">
      <a class="nd-nav-link nd-nav-link--icon"
        href="https://www.linkedin.com/in/nicol%C3%B2-domanti-11624b229/"
        title="See my LinkedIn profile"
        target="_blank">
        <FontAwesomeIcon :icon="['fab', 'linkedin']" />
      </a>
    </div>
  </div>

</template>

<style scoped lang="scss">
$transition: 0.3s ease-out;

.nd-off-canvas {
  height: 100vh;
  min-width: 50vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: var(--clr-bg);
  color: var(--clr);
  padding: 1rem 2rem;
  overflow-x: hidden;
  transform: translateX(-100%);
  transition: transform $transition, box-shadow $transition;

  &--expanded {
    transform: none;
    box-shadow: 12px 0px 20px 0px rgba(0, 0, 0, 0.3);
  }

  .nd-off-canvas-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img {
      height: 50px;
    }
  }

  .nd-nav-link-wrapper {
    margin: 1.5rem 0;
  }
}

.nd-off-canvas-overlay {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  background-color: black;
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