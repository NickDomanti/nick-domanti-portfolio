<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
</script>

<template>
  <div class="nd-home">
    
    <AnimateAppear animation="zoomInDown">
      <h1>Hi, I'm Nick</h1>
    </AnimateAppear>
    <AnimateAppear animation="zoomInUp">
      <p>Welcome to my website</p>
    </AnimateAppear>

  </div>
</template>

<style scoped lang="scss">
.nd-home {
  text-align: center;
}
</style> 