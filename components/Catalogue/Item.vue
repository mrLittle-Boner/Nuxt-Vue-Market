<template>
  <li :class="$style.item + ' ' + selectedClass(product.id) ">
    <div :class="$style.item__rating">
      <SVGsRating />
      <span>{{ product.rating }}</span>
    </div>
    <div :class="$style.item__photo">
      <img :src="'https://frontend-test.idaproject.com' + product.photo">
    </div>
    <div :class="$style.item__cart" @click="addToCart(product)">
      <CartLogo />
    </div>
    <div :class="$style.item__name">
      {{ product.name }}
    </div>
    <div :class="$style.item__price">
      {{ product.price }} &#8381;
    </div>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  methods: {
    addToCart (item) {
      if (this.itemInCart(item.id)) {
        this.$store.commit('removeFromCart', item.id)
      } else {
        this.$store.commit('addItemToCart', item)
      }
    },
    itemInCart (id) {
      const itemInCartIds = this.$store.state.itemsInCart.map(item => item.id)
      return itemInCartIds.includes(id)
    },
    selectedClass (id) {
      if (this.itemInCart(id)) {
        return 'selected'
      }
      return ''
    }
  }
}
</script>

<style module lang="scss">

  .item {
    position: relative;
    padding: 16px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(3, auto);
    border: 1px solid transparent;
    border-radius: 8px;

    &__cart {
      width: 12px;
      height: 14px;

      svg {
        fill: #959DAD;
        cursor: pointer;

        &:hover {
          fill: black;
        }
      }
    }
    &__name {
      grid-column: span 3;
      font-size: 14px;
    }
    &__price {
      grid-column: span 3;
      margin-top: 6px;
      font-weight: 700;
    }
    &__rating {
      align-self: self-start;
      display: flex;
      justify-content: center;
      align-items: center;
        span {
        font-size: 10px;
        font-weight: 700;
        color: #F2C94C;
        margin-left: 3px;
      }
    }
    &__photo {
      width: 200px;
      height: 200px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
