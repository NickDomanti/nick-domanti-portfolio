<script setup lang="ts">

import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
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
    <MyHeader />
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
    <MyFooter />
  </div>
</template>

<style scoped lang="scss">
.nd-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  main {
    padding: 1rem 5rem;
  }
}
</style>
