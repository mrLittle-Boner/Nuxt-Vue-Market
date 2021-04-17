<template>
  <div :class="$style.content">
    <CatalogueNav />
    <main :class="$style.catalogue__view">
      <CatalogueSorting />
      <CatalogueList />
    </main>
  </div>
</template>

<script>
export default {
  async fetch () {
    const allProducts = await fetch('https://frontend-test.idaproject.com/api/product').then(res => res.json())
    this.$store.commit('setItems', allProducts)
  },
  head () {
    return {
      bodyAttrs: {
        class: this.modalOpen ? 'scrolnt' : ''
      }
    }
  },
  computed: {
    modalOpen () {
      return this.$store.state.showModal
    }
  }
}
</script>

<style module lang="scss">
.lipa {
  font-size: 1.6rem;
}
.content {
  display: flex;
}
.catalogue__view {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 42px;
}
</style>
