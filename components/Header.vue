<template>
  <header :class="$style.header">
    <div class="container" :class="$style.header__container">
      <div :class="$style.header__logo">
        TestList
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
@import '~assets/css/mixins';

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
  @include bold-text(2.2rem)
}

.header__cart {
  width: 24px;
  height: 26px;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
}

.header__cart svg {
  fill: $color-black;
}

.header__amount {
  @include bold-text(0.8rem);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  top: -4px;
  right: -5px;
  background-color: $color-grey-light;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}
</style>
