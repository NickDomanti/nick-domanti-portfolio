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
        <img src="@/assets/logo-no-bg.png" />
      </RouterLink>
    </div>

    <RouterLink v-for="route in useRoutes()" :key="route.path" :to="route.path" class="nd-nav-link">{{ route.name }}</RouterLink>
    <a class="nd-nav-link nd-nav-link--icon"
      href="https://github.com/NickDomanti/nick-domanti-portfolio"
      title="See this website's source code"
      target="_blank">
      <FontAwesomeIcon :icon="['fab', 'github']" />
    </a>
    <a class="nd-nav-link nd-nav-link--icon"
      href="https://www.linkedin.com/in/nicol%C3%B2-domanti-11624b229/"
      title="See my LinkedIn profile"
      target="_blank">
      <FontAwesomeIcon :icon="['fab', 'linkedin']" />
    </a>

    <div class="nd-header-right">
      <ThemeSwitcher />
    </div>

  </header>
</template>

<style scoped lang="scss">
@import '@/assets/styles/vars';

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

  .nd-off-link {      
    @media (min-width: $screen-md) {
      display: none;
    }
  }

  .nd-nav-link {
    display: none;

    @media (min-width: $screen-md) {
      display: block;
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