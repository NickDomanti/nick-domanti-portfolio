<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
import { usePlayAnimate } from '@/composables/play-animate'
import { useContentStore } from '@/stores/content'
import { AnimateClass } from '@/types/animate-class'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const h1 = ref<HTMLElement>()
const animateH1 = () =>
  usePlayAnimate(h1.value!, new AnimateClass('tada'), '100ms')

const { texts } = storeToRefs(useContentStore())
</script>

<template>
  <div class="nd-home">
    <AnimateAppear animation="zoomInDown">
      <h1 ref="h1">{{ texts['home.title'] }}</h1>
    </AnimateAppear>
    <AnimateAppear animation="zoomInUp" delay="0.5s" @after-appear="animateH1">
      <p>{{ texts['home.subtitle'] }}</p>
    </AnimateAppear>
  </div>
</template>

<style scoped lang="scss">
.nd-home {
  text-align: center;
}
</style>
