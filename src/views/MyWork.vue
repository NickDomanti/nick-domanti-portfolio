<script setup lang="ts">
import Work from '@/types/work'
import WorkCard from '@/components/WorkCard.vue'
import PerspectiveHover from '@/components/PerspectiveHover.vue'
import AnimateAppear from '@/components/AnimateAppear.vue'

const works: Work[] = [
  {
    title: 'ASP.NET Core Fullstack Freelance Dev',
    period: 'Apr 2023 - maintaining',
    company: 'Easy Rider Mallorca',
    text: "First experience as freelance developer. I developed\
      Easy Rider Mallorca's website using Umbraco CMS which\
      runs on ASP.NET Core MVC, TypeScript, and SASS. I\
      hosted it through IONOS 1&1 on a VPS with Plesk.",
    link: 'https://easyridermallorca.com'
  },
  {
    title: 'Sitecore & Vue Dev',
    period: 'Feb 2022 - ongoing',
    company: 'Cegeka, Cologno Monzese',
    text: 'Working as an outside consultant from\
      di-erre software. I update and create new features on\
      Sitecore projects, especially on the frontend side, most\
      times using the Vue JavaScript framework.'
  },
  {
    title: 'ASP.NET Fullstack Dev',
    period: 'Jan 2022 - ongoing',
    company: 'di-erre software, Milano',
    text: 'Working as an outside consultant in Cegeka.\
      Before that, I contributed to the launch of the new\
      company website (both frontend side with HTML and JS,\
      and backend side with C# and T-SQL), and developed\
      a new feature on nuiSense, a di-erre software app\
      present on the Microsoft Store.',
    link: 'https://dierresoftware.com'
  },
  {
    title: 'ASP.NET Core Fullstack Dev',
    period: 'Sep 2020 - Dec 2021',
    company: 'Edilservice, Mercallo',
    text: "I worked almost independently on the creation of a\
      management web app for the company's new\
      e-commerce site, using ASP.NET Core Razor Pages.\
      I also worked with Wordpress, PHP and Python."
  }
]
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
