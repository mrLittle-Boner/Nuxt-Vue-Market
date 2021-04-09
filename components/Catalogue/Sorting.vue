<template>
  <div :class="$style.sort" @mouseenter="show" @mouseleave="hide">
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
    sortingType () {
      return this.$store.state.sortingType
    }
  },
  methods: {
    changeSortType (sortBy) {
      this.$store.commit('changeSortingType', sortBy)
    },
    show () {
      this.showSort = true
    },
    hide () {
      this.showSort = false
    }
  }
}
</script>

<style module lang="scss">
  .sort {
    position: relative;
    z-index: 1;
    display: flex;
    width: fit-content;
    margin-left: auto;
    cursor: pointer;
    min-width: 130px;

    &__expand {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      padding-top: 14px;
      background-color: white;
      color: #959DAD;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 0 0 8px 8px;
      overflow: hidden;
    }

    &__option {
      font-size: 14px;
      padding: 4px 12px;

      &:hover {
        color: black;
        background-color: #F8F8F8;
      }
    }

    &__type {
      color: #59606D;
    }
  }
</style>
