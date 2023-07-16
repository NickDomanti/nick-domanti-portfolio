<template>
  <header>
    <RouterLink to="/" class="nd-logo-link">
      <img src="../assets/logo-no-bg.png" />
    </RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/cv">Curriculum Vitae</RouterLink>
  </header>
</template>

<style scoped lang="scss">
@import '../assets/styles/vars';

header {
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 2rem;

  @media (min-width: $screen-md) {
    justify-content: center;
    gap: 3rem;
  }

  img {
    height: 50px;
  }

  a {
    position: relative;
    color: white;
    text-decoration: none;

    &:not(.nd-logo-link)::after {
      content: '';
      position: absolute;
      display: block;
      background-color: white;
      height: 2px;
      width: 100%;
      margin-top: 5px;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    &:hover, &.router-link-active {
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>