<script setup lang="ts">
import { useContentStore } from '@/stores/content'
import { storeToRefs } from 'pinia'

const { texts } = storeToRefs(useContentStore())
</script>

<template>
  <footer>
    <small v-html="texts['footer']"></small>
  </footer>
</template>

<style scoped>
footer {
  color: grey;
  text-align: center;
  padding: 1rem 2rem;
}
</style>
