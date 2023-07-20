<script setup lang="ts">

import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import AnimateClass from './models/animate-class'
import AnimateClassSpeed from './models/animate-class-speed'
import OffCanvas from './components/OffCanvas.vue'
import { ref, watch } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'

const getEnterClass = (route: RouteLocationNormalizedLoaded) => {
  const animation = route.meta.enterClass as AnimateClass
    ?? new AnimateClass('animate__zoomIn', AnimateClassSpeed.Faster)
  return animation.toString()
}

const getLeaveClass = (route: RouteLocationNormalizedLoaded) => {
  const animation = route.meta.leaveClass as AnimateClass
    ?? new AnimateClass('animate__fadeOutUp', AnimateClassSpeed.Faster)
  return animation.toString()
}

watch(useRoute(), () => {
  offCanvasExpanded.value = false
})

const offCanvasExpanded = ref(false)

</script>

<template>
  <div class="nd-page">

    <OffCanvas :expanded="offCanvasExpanded" @hide-off-canvas="offCanvasExpanded = false" />

    <MyHeader @show-off-canvas="offCanvasExpanded = true" />

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
  transition: margin-left 0.5s;
  color: $clr-black;
  background-color: $clr-white;

  main {
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;

    @media (min-width: $screen-md) {
      padding: 1rem 5rem;
    }
  }
}
</style>
