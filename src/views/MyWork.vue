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
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;

    @media (min-width: $screen-md) {
      flex-direction: row-reverse;
      flex-wrap: wrap-reverse;
    }

    .nd-work-card-wrapper {
      @media (min-width: $screen-md) {
        flex: calc(50% - 2rem);
      }

      .nd-card {
        height: calc(100% - 1rem);
      }
    }
  }
}
</style>
