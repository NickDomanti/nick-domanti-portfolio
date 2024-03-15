<script setup lang="ts">
import AnimateAppear from '@/components/AnimateAppear.vue'
import PerspectiveHover from '@/components/PerspectiveHover.vue'
import { useContentStore } from '@/stores/content'
import { storeToRefs } from 'pinia'

const { texts } = storeToRefs(useContentStore())
</script>

<template>
  <div class="nd-about">
    <AnimateAppear animation="fadeInDown">
      <PerspectiveHover>
        <img src="/img/my-pic.jpeg" />
      </PerspectiveHover>
    </AnimateAppear>
    <AnimateAppear animation="fadeInUp">
      <h1>{{ texts['about.title'] }}</h1>
      <div v-html="texts['about.content']"></div>
      <p>
        <FontAwesomeIcon :icon="['fas', 'angles-right']" />
        <a
          href="/CV Nicolò Domanti 2023-06.pdf"
          class="nd-cv-link"
          target="_blank"
          >{{ texts['about.resume_cta'] }}</a
        >
      </p>
    </AnimateAppear>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/vars';

.nd-about {
  @media (min-width: $screen-md) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;

    @media (min-width: $screen-md) {
      width: 200px;
      height: 200px;
    }
  }

  h1 {
    margin: 1rem 0;
  }

  p {
    font-size: 0.95rem;
  }

  .nd-cv-link {
    margin-left: 0.5rem;
  }
}
</style>
