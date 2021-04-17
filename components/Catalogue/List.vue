<template>
  <ul :class="$style.catalogue__list">
    <CatalogueItem
      v-for="item in currentCategoryItems"
      :key="item.id"
      :product="item"
    />
  </ul>
</template>

<script>
export default {
  computed: {
    currentCategory () {
      return this.$store.state.currentCategory
    },
    currentCategoryItems () {
      return this.$store.state.items.filter(item => item.category === this.currentCategory)
    }
  }
}
</script>

<style module lang="scss">
  .catalogue__list {
    margin-top: 34px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 264px);
    gap: 16px;
  }
</style>
