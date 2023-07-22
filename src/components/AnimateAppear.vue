<script setup lang="ts">

import AnimateClass from '@/models/animate-class'
import AnimateClassSpeed from '@/models/animate-class-speed'

defineProps<{
  animation: string,
  speed?: AnimateClassSpeed
}>()

</script>

<template>
  <Transition appear :enter-active-class="new AnimateClass(animation, speed).toString()">
    <slot></slot>
  </Transition>
</template>