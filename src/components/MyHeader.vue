<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineEmits(['showOffCanvas'])

</script>

<template>
  <header>

    <div class="nd-header-left">
      <span class="nd-off-link" @click="$emit('showOffCanvas')">
        <FontAwesomeIcon :icon="['fas', 'bars-staggered']" />
      </span>
    </div>

    <div class="nd-header-center">
      <RouterLink to="/" class="nd-logo-link">
        <img src="../assets/logo-no-bg.png" />
      </RouterLink>
    </div>
    
    <div class="nd-header-right"></div>

    <RouterLink to="/about" class="nd-header-link">About</RouterLink>
    <RouterLink to="/cv" class="nd-header-link">Curriculum Vitae</RouterLink>

  </header>
</template>

<style scoped lang="scss">
@import '../assets/styles/vars';

header {
  background-color: $clr-black;
  color: $clr-white;
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
    color: $clr-white;
    text-decoration: none;

    &.nd-off-link {      
      @media (min-width: $screen-md) {
        display: none;
      }
    }

    &.nd-header-link {
      position: relative;
      display: none;

      @media (min-width: $screen-md) {
        display: inline;
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        background-color: $clr-white;
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

  .nd-header-left, .nd-header-right {
    @media (min-width: $screen-md) {
      display: none;
    }
  }
}
</style>