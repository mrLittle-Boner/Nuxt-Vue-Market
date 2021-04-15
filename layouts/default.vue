<template>
  <div>
    <Header />
    <div class="container">
      <div class="content">
        <CatalogueNav />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~assets/css/variables';

.content {
  display: flex;
  margin-top: 32px;
}
</style>
