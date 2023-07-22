<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
</script>

<template>
  <div class="nd-about">

    <AnimateAppear animation="lightSpeedInLeft">
      <h1>This is an about page</h1>
    </AnimateAppear>
    <AnimateAppear animation="lightSpeedInRight">
      <p>Not much to say for now</p>
    </AnimateAppear>
    
  </div>
</template>

<style scoped lang="scss">
.nd-about {
  text-align: center;
}
</style>