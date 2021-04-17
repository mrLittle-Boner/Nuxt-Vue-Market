<template>
  <button :class="$style.sort" @mouseenter="show" @mouseleave="hide">
    <div :class="$style.sort__trigger">
      Сортировать по : <span :class="$style.sort__type">{{ sortingType }}</span>
    </div>
    <div v-if="showSort" :class="$style.sort__expand">
      <span :class="$style.sort__option" @click="changeSortType('цене')">
        По цене
      </span>
      <span :class="$style.sort__option" @click="changeSortType('популярности')">
        По популярности
      </span>
    </div>
  </button>
</template>

<script>
export default {
  data () {
    return {
      showSort: true
    }
  },
  computed: {
    sortingType () {
      return this.$store.state.sortingType
    }
  },
  methods: {
    changeSortType (sortBy) {
      this.$store.commit('changeSortingType', sortBy)
    },
    show () {
      // this.showSort = true
    },
    hide () {
      // this.showSort = false
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
.sort__type::after {
  width: 0;
  content: '';
  margin-left: 4px;
  height: 0;
  border-style: solid;
  border-width: 2.5px 2.5px 0 2.5px;
  border-color: $color-grey transparent transparent transparent;
}
</style>
