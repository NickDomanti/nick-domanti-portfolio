<script setup lang="ts">

import AnimateAppear from '@/components/AnimateAppear.vue'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const bounceAnglesDown = ref(false)

</script>

<template>
  <div class="nd-about" @scroll="() => console.log('scrolled')">

    <AnimateAppear animation="fadeInDown">
      <img src="../assets/my-pic.jpeg" />
    </AnimateAppear>
    <AnimateAppear animation="fadeInUp">
      <h1>About Me</h1>
    </AnimateAppear>
    <AnimateAppear animation="fadeInUp" delay="1s" @after-appear="bounceAnglesDown = true">
      <div class="nd-bouncing-wrapper">
        <div :class="{ 'nd-bouncing': bounceAnglesDown }">
          <FontAwesomeIcon :icon="['fas', 'angles-down']" />
        </div>
      </div>
    </AnimateAppear>
    
  </div>
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
      animation-name: nd-bouncing;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-delay: 1s;
    }
  }

  @keyframes nd-bouncing {
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
}
</style>