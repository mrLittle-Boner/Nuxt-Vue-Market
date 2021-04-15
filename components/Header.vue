<template>
  <header :class="$style.header">
    <div class="container" :class="$style.header__container">
      <div :class="$style.header__logo">
        <a href="">TestList</a>
      </div>
      <div :class="$style.header__cart" @click="toggle">
        <SVGsCart />
        <span :class="$style.header__amount">{{ totalitemsInCart }}</span>
      </div>
      <CartWindow />
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    totalitemsInCart () {
      return this.$store.state.itemsInCart.length
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'toggleModalCartWindow'
    })
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';

.header__container {
  display: flex;
  justify-content: space-between;
  height: 66px;
  align-items: center;
  box-shadow: $box-shadow-card;
  border-radius: 0px 0px 8px 8px;
}

.header__logo {
  color: $color-grey;
  font-size: 22px;
  font-weight: 700;
}

.header__cart {
  width: 24px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
}

.header__cart svg {
  fill: black;
}

.header__amount {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  top: -4px;
  right: -5px;
  font-size: 8px;
  font-weight: 700;
  background-color: #959DAD;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}
</style>
