<template>
  <header>
    <RouterLink to="/">
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
    color: white;
    text-decoration: none;
    transition: transform 0.2s ease-out;

    &:hover, &.router-link-active {
      transform: scale(1.1);
    }
  }
}
</style>