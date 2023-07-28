<script setup lang="ts">

import AnimateAppear from '@/components/AnimateAppear.vue'
import PerspectiveHover from '@/components/PerspectiveHover.vue'

</script>

<template>
  <div class="nd-about">

    <AnimateAppear animation="fadeInDown">
      <PerspectiveHover>
        <img src="/img/my-pic.jpeg" />
      </PerspectiveHover>
    </AnimateAppear>
    <AnimateAppear animation="fadeInUp">
      <h1>About Me</h1>
      <p>
        Hi, my name is Nicolò,<br />
        but you can call me Nick.
      </p>
      <p>
        I am a Web Developer from Italy.
      </p>
      <p>
        I specialize in .NET and Vue.
      </p>
      <p>
        I am incredibly passionate about coding,<br />
        and as such I love to learn new technologies,<br />
        especially when it comes to .NET and Web Development.
      </p>
      <p>
        <FontAwesomeIcon :icon="['fas', 'angles-right']" />
        <RouterLink to="/cv" class="nd-cv-link">Check out my resume</RouterLink>
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
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  h1 {
    margin: 1rem 0;
  }

  p {
    font-size: .95rem;
  }

  .nd-cv-link {
    margin-left: 0.5rem;
  }
}
</style>