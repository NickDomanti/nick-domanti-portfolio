<script setup lang="ts">

import { useRoutes } from '@/composables/routes'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

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

    <RouterLink v-for="route in useRoutes()" :key="route.path" :to="route.path" class="nd-nav-link">{{ route.name }}</RouterLink>
    <RouterLink to="/dsd" class="nd-nav-link">404</RouterLink>

    <div class="nd-header-right">
      <ThemeSwitcher />
    </div>

  </header>
</template>

<style scoped lang="scss">
@import '../assets/styles/vars';

header {
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
    &.nd-off-link {      
      @media (min-width: $screen-md) {
        display: none;
      }
    }

    &.nd-nav-link {
      display: none;

      @media (min-width: $screen-md) {
        display: block;
      }
    }
  }

  .nd-header-left {
    @media (min-width: $screen-md) {
      display: none;
    }
  }

  .nd-header-center {
    text-align: center;
  }
}
</style>