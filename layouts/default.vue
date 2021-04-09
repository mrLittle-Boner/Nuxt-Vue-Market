<template>
  <div :class="$style.container">
    <Header />
    <div :class="$style.content">
      <CatalogueNav />
      <Nuxt />
    </div>
  </div>
</template>

<style module lang="scss">
  .container {
    max-width: 1300px;
    padding: 0 10px;
    margin: 0 auto;
  }
  .content {
    display: flex;
    margin-top: 32px;
  }
</style>
