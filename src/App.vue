<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyHeader from '@/components/MyHeader.vue'
import OffCanvas from '@/components/OffCanvas.vue'
import { useContentStore } from '@/stores/content'
import { useUiSettingsStore } from '@/stores/ui-settings'
import { AnimateClass } from '@/types/animate-class'
import { AnimateClassSpeed } from '@/types/animate-class-speed'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const offCanvasExpanded = ref(false)
watch(useRoute(), () => {
  offCanvasExpanded.value = false
})

const uiSettings = useUiSettingsStore()
const leaveAnimateClass = new AnimateClass('fadeOut', AnimateClassSpeed.Faster)

const { populateContent } = useContentStore()
onMounted(async () => {
  await populateContent()
})
</script>

<template>
  <div class="nd-page" :class="'nd-page--' + uiSettings.getTheme()">
    <OffCanvas
      :expanded="offCanvasExpanded"
      @hide-off-canvas="offCanvasExpanded = false"
    />

    <AnimateAppear animation="slideInDown" :speed="AnimateClassSpeed.Faster">
      <MyHeader @show-off-canvas="offCanvasExpanded = true" />
    </AnimateAppear>

    <main>
      <RouterView v-slot="{ Component }">
        <Transition
          mode="out-in"
          :leave-active-class="leaveAnimateClass.toString()"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AnimateAppear animation="slideInUp" :speed="AnimateClassSpeed.Faster">
      <MyFooter />
    </AnimateAppear>
  </div>
</template>

<style lang="scss">
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

    a {
      color: var(--clr);
    }
  }
}
</style>
