<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
import PerspectiveHover from '@/components/PerspectiveHover.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { useContentStore } from '@/stores/content'
import { storeToRefs } from 'pinia'

const { projects } = storeToRefs(useContentStore())
</script>

<template>
  <div class="nd-projects">
    <AnimateAppear animation="fadeInUp" class="nd-project-cards">
      <PerspectiveHover
        v-for="project in projects"
        :key="project.id"
        class="nd-project-card-wrapper"
      >
        <ProjectCard v-bind="project" />
      </PerspectiveHover>
    </AnimateAppear>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_vars';

.nd-projects {
  @media (min-width: $screen-lg) {
    width: 80%;
  }

  .nd-project-cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
