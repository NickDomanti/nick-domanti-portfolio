<script setup lang="ts">

defineProps<{
  expanded: boolean
}>()

</script>

<template>
  <div class="nd-off-canvas" :class="{ 'nd-off-canvas--expanded': expanded }">

  </div> 
</template>

<style scoped lang="scss">
.nd-off-canvas {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  &--expanded {
    width: auto;
  }
}
</style>