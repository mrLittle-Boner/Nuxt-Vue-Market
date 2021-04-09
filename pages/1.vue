<template>
  <section class="catalogue">
    <CatalogueSorting />
    <ul class="catalogue__list">
      <CatalogueItem
        v-for="item in firstCategoryItems"
        :key="item.id"
        :product="item"
      />
    </ul>
  </section>
</template>

<script>
export default {
  async fetch () {
    await fetch('https://frontend-test.idaproject.com/api/product').then(res => res.json()).then(data => this.$store.commit('setItems', data))
  },
  computed: {
    firstCategoryItems () {
      return this.$store.state.items.filter(item => item.category === 1)
    }
  }
}
</script>
