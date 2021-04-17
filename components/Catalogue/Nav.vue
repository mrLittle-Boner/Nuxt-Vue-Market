<template>
  <div :class="$style.categories">
    <h2 :class="$style.categories__title">
      Каталог
    </h2>
    <ul :class="$style.categories__nav">
      <li
        v-for="category in categories"
        :key="category.id"
        :class="[$style.categories__link, currentCategory === category.id ? $style.active : '' ]"
        @click="setCategory(category.id)"
      >
        <span>{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: []
    }
  },
  async fetch () {
    const fetchedCategories = await fetch('https://frontend-test.idaproject.com/api/product-category').then(resp => resp.json())
    this.categories = fetchedCategories
    this.$store.commit('setCurrentCategory', fetchedCategories[0].id)
  },
  computed: {
    currentCategory () {
      return this.$store.state.currentCategory
    }
  },
  methods: {
    setCategory (num) {
      this.$store.commit('setCurrentCategory', num)
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';
@import '~assets/css/mixins';

.categories {
  width: 160px;
  padding-right: 10px;
  margin-top: 32px;
}

.categories__title {
  @include bold-text(3.2rem);
  color: $color-black;
  margin-bottom: 24px;
}

.categories__nav {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  font-size: 1.6rem;
}

.categories__link {
  cursor: pointer;
  color: $color-grey-light;
}

.categories__link:hover {
  color: $color-grey;
}

.active {
  color: $color-black;
  text-decoration: underline;
}
</style>
