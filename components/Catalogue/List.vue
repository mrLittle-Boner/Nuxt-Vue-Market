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
      const items = this.$store.state.items.filter(item => item.category === this.currentCategory)
      const sortBy = this.$store.state.sortingType
      const ascendSort = this.$store.state.ascendDirection
      let filteredItems = []

      if (sortBy === 'rating') {
        if (ascendSort) {
          filteredItems = items.sort((a, b) => b.rating - a.rating)
        }
        if (!ascendSort) {
          filteredItems = items.sort((a, b) => a.rating - b.rating)
        }
      }

      if (sortBy === 'price') {
        if (ascendSort) {
          filteredItems = items.sort((a, b) => b.price - a.price)
        }
        if (!ascendSort) {
          filteredItems = items.sort((a, b) => a.price - b.price)
        }
      }
      return filteredItems
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
