<template>
  <section class="catalogue">
    <CatalogueSorting />
    <ul class="catalogue__list">
      <CatalogueItem
        v-for="item in categoryItems"
        :key="item.id"
        :product="item"
      />
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    categoryItems () {
      return this.$store.state.items.filter(item => item.category === 2)
    }
  }
}
</script>
