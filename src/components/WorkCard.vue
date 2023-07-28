<script setup lang="ts">

import Work from '@/models/work'

defineProps<Work>()

</script>

<template>
  <component :is="link ? 'a' : 'div'" :href="link" :target="link ? '_blank' : null" class="nd-card">
    <p class="nd-card-title">{{ title }}</p>
    <p class="nd-card-period-company">
      {{ period }} | {{ company }}
    </p>
    <p class="nd-card-text">{{ text }}</p>
  </component>
</template>

<style scoped lang="scss">
.nd-card {
  display: block;
  text-decoration: none;
  text-align: left;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  p {
    margin: 0.75rem 0;
  }

  .nd-card-title {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .nd-card-period-company {
    font-size: 0.9rem;
  }
}
</style>