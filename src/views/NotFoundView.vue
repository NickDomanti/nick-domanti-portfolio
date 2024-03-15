<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
</script>

<template>
  <div class="nd-not-found">
    <AnimateAppear animation="bounceIn">
      <div>
        <h1>Error 404</h1>
        <p>Page not found</p>
      </div>
    </AnimateAppear>
  </div>
</template>

<style scoped lang="scss">
.nd-not-found {
  text-align: center;
}
</style>
