<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
import PerspectiveHover from '@/components/PerspectiveHover.vue'
import WorkCard from '@/components/WorkCard.vue'
import { useContentStore } from '@/stores/content'
import { storeToRefs } from 'pinia'

const { works } = storeToRefs(useContentStore())
</script>

<template>
  <div class="nd-work">
    <AnimateAppear animation="fadeInUp" class="nd-work-cards">
      <PerspectiveHover
        v-for="work in works"
        :key="work.company"
        class="nd-work-card-wrapper"
      >
        <WorkCard v-bind="work" />
      </PerspectiveHover>
    </AnimateAppear>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_vars';

.nd-work {
  @media (min-width: $screen-lg) {
    width: 80%;
  }

  .nd-work-cards {
    @media (min-width: $screen-md) {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .nd-work-card-wrapper {
      margin: 2rem 0;

      @media (min-width: $screen-md) {
        margin: 0;
        flex: calc(50% - 2rem);
      }

      .nd-card {
        height: calc(100% - 1rem);
      }
    }
  }
}
</style>
