<script setup lang="ts">

import AnimateAppear from '@/components/AnimateAppear.vue'
import PerspectiveHover from '@/components/PerspectiveHover.vue'
import { ref, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const bounceAngles = ref(false)
const disableAppearAnimations = ref(false)
const step = ref(1)

watch(step, () => {
  bounceAngles.value = false
  disableAppearAnimations.value = true
})

</script>

<template>
  <Transition name="slide" :duration="5000">
    <div class="nd-about" :key="step">

      <div class="nd-about-1" v-if="step === 1">
        <AnimateAppear animation="fadeInDown" :disabled="disableAppearAnimations">
          <PerspectiveHover>
            <img src="/img/my-pic.jpeg" />
          </PerspectiveHover>
        </AnimateAppear>
        <AnimateAppear animation="fadeInUp" :disabled="disableAppearAnimations">
          <h1>About Me</h1>
        </AnimateAppear>
        <AnimateAppear animation="fadeInUp" delay="1s" @after-appear="bounceAngles = true">
          <div class="nd-bouncing-wrapper" @click="step = 2">
            <div class="nd-bouncing" :class="{ 'nd-bouncing--down': bounceAngles }">
              <FontAwesomeIcon :icon="['fas', 'angles-down']" />
            </div>
          </div>
        </AnimateAppear>
      </div>
  
      <div class="nd-about-2" v-if="step === 2">
        <AnimateAppear animation="fadeInDown" delay="1s" @after-appear="bounceAngles = true">
          <div class="nd-bouncing-wrapper" @click="step = 1">
            <div class="nd-bouncing" :class="{ 'nd-bouncing--up': bounceAngles }">
              <FontAwesomeIcon :icon="['fas', 'angles-up']" />
            </div>
          </div>
        </AnimateAppear>
        <h1>Hello there</h1>
      </div>

    </div>
  </Transition>
</template>

<style scoped lang="scss">
.nd-about {
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: calc(1rem - 10px);
  }

  .nd-bouncing-wrapper {
    display: inline-block;
    padding: 10px;
    cursor: pointer;

    .nd-bouncing {
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-delay: 1s;

      &--down {
        animation-name: nd-bouncing-down;
      }

      &--up {
        animation-name: nd-bouncing-up;
      }
    }
  }

  @keyframes nd-bouncing-down {
    0% {
      transform: translateY(0);
    }

    13% {
      transform: translateY(10px);
    }

    25% {
      transform: translateY(0);
    }

    38% {
      transform: translateY(10px);
    }

    50% {
      transform: translateY(0);
    }
  }

  @keyframes nd-bouncing-up {
    0% {
      transform: translateY(0);
    }

    13% {
      transform: translateY(-10px);
    }

    25% {
      transform: translateY(0);
    }

    38% {
      transform: translateY(-10px);
    }

    50% {
      transform: translateY(0);
    }
  }
}
</style>