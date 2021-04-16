<template>
  <div :class="$style.content">
    <CatalogueNav />
    <CatalogueList />
  </div>
</template>

<script>
export default {
  async fetch () {
    const allProducts = await fetch('https://frontend-test.idaproject.com/api/product').then(res => res.json())
    this.$store.commit('setItems', allProducts)
    // const fetchedCategories = await fetch('https://frontend-test.idaproject.com/api/product-category').then(resp => resp.json())
    // this.$store.commit('setCurrentCategory', fetchedCategories[0].id)
    // this.categories = fetchedCategories
    // this.categoryNum = fetchedCategories[0].id
  }
}
</script>

<style module lang="scss">
.lipa {
  font-size: 1.6rem;
}
.content {
  display: flex;
  margin-top: 32px;
}
</style>
