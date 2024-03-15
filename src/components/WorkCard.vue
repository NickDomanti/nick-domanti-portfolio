<script setup lang="ts">
import { Work } from '@/types/work'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps<Work>()
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    :href="link"
    :target="link ? '_blank' : null"
    class="nd-card"
  >
    <p class="nd-card-title">
      {{ title }}
      <FontAwesomeIcon
        v-if="to === 'ongoing'"
        :icon="['fas', 'star']"
        class="star"
      />
    </p>
    <p class="nd-card-period-company">{{ from }} - {{ to }} | {{ company }}</p>
    <p class="nd-card-text" v-html="description"></p>
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

  .star {
    color: gold;
  }
}
</style>
