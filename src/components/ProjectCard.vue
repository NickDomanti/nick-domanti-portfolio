<script setup lang="ts">
import { Project } from '@/types/project'

const props = defineProps<Project>()
console.log(props.thumbnailUrl)
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link"
    :target="link ? '_blank' : null"
    class="nd-card"
  >
    <img :src="thumbnailUrl" />
    <div>
      <p class="nd-card-title">{{ title }}</p>
      <p class="nd-card-text" v-html="description"></p>
    </div>
  </component>
</template>

<style scoped lang="scss">
.nd-card {
  display: grid;
  grid-template-columns: 200px auto;
  text-decoration: none;
  text-align: left;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  position: relative;

  img {
    border-radius: 5px;
  }

  p {
    margin: 0.75rem 0;
  }

  .nd-card-title {
    font-size: 1.1rem;
    font-weight: bold;
  }
}
</style>
