<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
import AnimateClass from '@/models/animate-class'
import { ref } from 'vue'
import { usePlayAnimate } from '@/composables/play-animate'

const h1 = ref<HTMLElement>()
const animateH1 = () =>
  usePlayAnimate(h1.value!, new AnimateClass('tada'), '100ms')
</script>

<template>
  <div class="nd-home">
    <AnimateAppear animation="zoomInDown">
      <h1 ref="h1">Hi, I'm Nick</h1>
    </AnimateAppear>
    <AnimateAppear animation="zoomInUp" delay="0.5s" @after-appear="animateH1">
      <p>Welcome to my website</p>
    </AnimateAppear>
  </div>
</template>

<style scoped lang="scss">
.nd-home {
  text-align: center;
}
</style>
