<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
</script>

<template>
  <div class="nd-home">
    
    <AnimateAppear animation="backInDown">
      <h1>Hi, I'm Nick</h1>
    </AnimateAppear>
    <AnimateAppear animation="backInUp">
      <p>Welcome to my website</p>
    </AnimateAppear>

  </div>
</template>

<style scoped lang="scss">
.nd-home {
  text-align: center;
}
</style> 