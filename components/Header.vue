<template>
  <header>
    <div class="logo">
      LOGO
    </div>
    <div :class="$style.cart" @click="toggle">
      <CartLogo />
      <span :class="$style.cart__amount">{{ totalitemsInCart }}</span>
    </div>
    <CartWindow />
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
  .logo {
    color: grey;
    font-size: 22px;
    font-weight: 700;
  }

  .cart {
    width: 24px;
    height: 26px;
    margin-right: 20px;
    cursor: pointer;
    position: relative;

    svg {
      fill: black;
    }

    &__amount {
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
  }
</style>
