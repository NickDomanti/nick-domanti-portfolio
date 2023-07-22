<script setup lang="ts">

import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import AnimateClass from '@/models/animate-class'
import AnimateClassSpeed from '@/models/animate-class-speed'
import OffCanvas from '@/components/OffCanvas.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
import { useUiSettingsStore } from '@/stores/ui-settings'

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

const offCanvasExpanded = ref(false)
watch(useRoute(), () => {
  offCanvasExpanded.value = false
})

const uiSettings = useUiSettingsStore()
const headerTransition = new AnimateClass('animate__fadeInDown', AnimateClassSpeed.Faster)
const footerTransition = new AnimateClass('animate__fadeInUp', AnimateClassSpeed.Faster)

</script>

<template>
  <div class="nd-page" :class="'nd-page--' + uiSettings.getTheme()">

    <OffCanvas :expanded="offCanvasExpanded" @hide-off-canvas="offCanvasExpanded = false" />

    <Transition appear :enter-active-class="headerTransition.toString()">
      <MyHeader @show-off-canvas="offCanvasExpanded = true" />
    </Transition>

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

    <Transition appear :enter-active-class="footerTransition.toString()">
      <MyFooter />
    </Transition>
    
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/vars';

.nd-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: var(--clr);
  background-color: var(--clr-bg);

  transition: color $theme-transition, background-color $theme-transition;

  &--dark {
    --clr: var(--clr-white);
    --clr-bg: var(--clr-bg-black);
  }

  &--light {
    --clr: var(--clr-black);
    --clr-bg: var(--clr-bg-white);
  }

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