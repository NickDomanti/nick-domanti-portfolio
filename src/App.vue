<template>
  <div class="nd-page">
    <header>
      <RouterLink to="/">
        <img src="./assets/logo-no-bg.png" />
      </RouterLink>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <small>Designed & Coded by Nick Domanti &copy; 2023</small>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.nd-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  header {
    background-color: black;
    color: white;
    text-align: center;
    padding: 1rem;

    img {
      height: 50px;
    }
  }

  main {
    padding: 1rem 5rem;
  }

  footer {
    color: grey;
    text-align: center;
    padding: 1rem;
  }
}
</style>
