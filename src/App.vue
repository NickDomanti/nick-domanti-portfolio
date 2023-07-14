<script setup lang="ts">

import { RouteLocationNormalizedLoaded } from 'vue-router';

const getEnterClass = (route: RouteLocationNormalizedLoaded) : string => {
  const ret = route.meta.enterClass as string ?? 'animate__zoomIn'
  return `animate__animated ${ret}`
}

const getLeaveClass = (route: RouteLocationNormalizedLoaded) : string => {
  const ret = route.meta.leaveClass as string ?? 'animate__fadeOutUp'
  return `animate__animated ${ret}`
}

</script>

<template>
  <div class="nd-page">
    <header>
      <RouterLink to="/">
        <img src="./assets/logo-no-bg.png" />
      </RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/cv">Curriculum Vitae</RouterLink>
    </header>
    <main>
      <RouterView v-slot="{ Component, route }">
        <Transition
          mode="out-in"
          :enter-active-class="getEnterClass(route)"
          :leave-active-class="getLeaveClass(route)">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <footer>
      <small>Designed & Coded by Nick Domanti &copy; 2023</small>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@import './assets/styles/vars';

.nd-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  header {
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1rem 2rem;

    @media (min-width: $screen-md) {
      justify-content: center;
      gap: 3rem;
    }

    img {
      height: 50px;
    }

    a {
      color: white;
      text-decoration: none;
      transition: transform 0.2s ease-out;

      &:hover, &.router-link-active {
        transform: scale(1.1);
      }
    }
  }

  main {
    padding: 1rem 5rem;
  }

  footer {
    color: grey;
    text-align: center;
    padding: 1rem;
  }
}
</style>
