<template>
  <div :class="$style.sort" @click="show">
    <div :class="$style.sort__trigger">
      Сортировать по: <span :class="$style.sort__type">&nbsp;{{ sortingTypeText }}</span> <span :class="[$style.triangle, ascendDirection ? $style.triangle__asc : $style.triangle__desc ]" />
    </div>
    <div v-if="showSort" :class="$style.sort__expand" @mouseleave="hide">
      <span :class="$style.sort__option" @click="handleOptionClick('price')">
        По цене
      </span>
      <span :class="$style.sort__option" @click="handleOptionClick('rating')">
        По популярности
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSort: false
    }
  },
  computed: {
    sortingTypeText () {
      return this.$store.state.sortingType === 'price' ? 'цене' : 'популярности'
    },
    ascendDirection () {
      return this.$store.state.ascendDirection
    }
  },
  methods: {
    show () {
      this.showSort = true
    },
    hide () {
      this.showSort = false
    },
    handleOptionClick (sortBy) {
      const sortingBy = this.$store.state.sortingType

      if (sortingBy === sortBy) {
        this.$store.commit('toggleSortingDirection')
      }

      if (sortingBy !== sortBy) {
        this.$store.commit('changeSortingType', sortBy)
      }

      this.showSort = false
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';
@import '~assets/css/mixins';

.sort {
  position: relative;
  z-index: 1;
  border: none;
  background-color: white;
  display: flex;
  width: fit-content;
  margin-left: auto;
  cursor: pointer;
  min-width: 130px;
  font-size: 1.6rem;
  text-align: left;
}
.sort__expand {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  padding-top: 8px;
  padding-bottom: 12px;
  margin-top: 6px;
  background-color: white;
  color: $color-grey-light;
  box-shadow: $box-shadow-card;
  border-radius: $border-radius-default;
  overflow: hidden;
}
.sort__trigger {
  display: flex;
}
.sort__option {
  font-size: 1.4rem;
  padding: 4px 12px;
}
.sort__option:hover {
  color: $color-black;
  background-color: $color-grey-extra-light;
}
.sort__type {
  color: $color-grey;
  display: inline-flex;
  align-items: center;
}
.triangle {
  display: flex;
  align-items: center;
}
.triangle__asc::after {
  width: 0;
  content: ' ';
  margin-left: 4px;
  height: 0;
  border-style: solid;
  border-width: 2.5px 2.5px 0 2.5px;
  border-color: $color-grey transparent transparent transparent;
}
.triangle__desc::after {
  width: 0;
  height: 0;
  content: ' ';
  margin-left: 4px;
  border-style: solid;
  border-width: 0 2.5px 2.5px 2.5px;
  border-color: transparent transparent $color-grey transparent;
}

</style>
