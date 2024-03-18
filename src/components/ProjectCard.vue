<script setup lang="ts">
import { Project } from '@/types/project'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<Project>()
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link"
    :target="link ? '_blank' : null"
    class="nd-card"
  >
    <img v-if="thumbnailUrl" :src="thumbnailUrl" />
    <div>
      <p class="nd-card-title">{{ title }}</p>
      <p class="nd-card-text" v-html="description"></p>
    </div>

    <FontAwesomeIcon
      v-if="link"
      :icon="['fas', 'square-arrow-up-right']"
      class="pointer-icon"
      size="xl"
    />
  </component>
</template>

<style scoped lang="scss">
.nd-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  text-align: left;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 1rem;
  position: relative;

  img {
    display: block;
    width: 100%;
    border-radius: 5px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    margin: 0;
  }

  .nd-card-title {
    font-size: 1.1rem;
    font-weight: bold;
  }

  .pointer-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    translate: 30% 30%;
    color: var(--clr);
    background-color: var(--clr-bg);
  }
}
</style>
