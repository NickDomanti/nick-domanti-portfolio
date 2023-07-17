<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import OffCanvas from './OffCanvas.vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

</script>

<template>
  <header>

    <OffCanvas />

    <div class="nd-header-left">
      <a href="javascript:void(0)" class="nd-off-link">
        <FontAwesomeIcon :icon="['fas', 'bars-staggered']" />
      </a>
    </div>

    <div class="nd-header-center">
      <RouterLink to="/" class="nd-logo-link">
        <img src="../assets/logo-no-bg.png" />
      </RouterLink>
    </div>
    
    <Teleport to=".nd-off-canvas" :disabled="breakpoints.isGreaterOrEqual('md')">
      <RouterLink to="/about" class="nd-header-link">About</RouterLink>
      <RouterLink to="/cv" class="nd-header-link">Curriculum Vitae</RouterLink>
    </Teleport>

    <div class="nd-header-right"></div>

  </header>
</template>

<style scoped lang="scss">
@import '../assets/styles/vars';

header {
  background-color: black;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 1rem 2rem;

  @media (min-width: $screen-md) {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  img {
    height: 50px;
  }

  a {
    color: white;
    text-decoration: none;

    &.nd-off-link {      
      @media (min-width: $screen-md) {
        display: none;
      }
    }

    &.nd-header-link {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        display: block;
        background-color: white;
        height: 2px;
        width: 100%;
        margin-top: 5px;
        opacity: 0;
        transition: opacity 0.2s ease-out;
      }

      &:hover, &.router-link-active {
        &::after {
          opacity: 1;
        }
      }
    }
  }

  .nd-header-center {
    text-align: center;
  }

  .nd-header-right {
    opacity: 0;

    @media (min-width: $screen-md) {
      display: none;
    }
  }
}
</style>