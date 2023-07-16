<script setup lang="ts">

import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import AnimateClass from './models/animate-class'
import AnimateClassSpeed from './models/animate-class-speed'
import { RouteLocationNormalizedLoaded } from 'vue-router'

const getEnterClass = (route: RouteLocationNormalizedLoaded) => {
  const ret = route.meta.enterClass as AnimateClass
    ?? new AnimateClass('animate__zoomIn', AnimateClassSpeed.Faster)
  return ret.toString()
}

const getLeaveClass = (route: RouteLocationNormalizedLoaded) => {
  const ret = route.meta.leaveClass as AnimateClass
    ?? new AnimateClass('animate__fadeOutUp', AnimateClassSpeed.Faster)
  return ret.toString()
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
@import './assets/styles/vars';

.nd-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  main {
    padding: 1rem 5rem;
  }
}
</style>
