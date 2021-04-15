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
      <SVGsCart />
    </div>
    <div :class="$style.item__name">
      {{ product.name }}
    </div>
    <div :class="$style.item__price">
      {{ formatPrice(product.price) }} &#8381;
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
    },
    formatPrice (price) {
      return price.toString().match(/\d{3}/g).join(' ')
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';
@import '~assets/css/mixins';

.item {
  position: relative;
  padding: 16px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(3, auto);
  border: 1px solid transparent;
  border-radius: $border-radius-default;
  box-shadow: $box-shadow-card;
}

.item__name {
  grid-column: span 3;
  font-size: 1.4rem;
  color: $color-grey;
}

.item__price {
  grid-column: span 3;
  margin-top: 6px;
  @include bold-text(1.4rem)
}

.item__rating {
  align-self: self-start;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item__rating span {
  @include bold-text(1rem);
  color: $color-star;
  margin-left: 3px;
}

.item__photo {
  width: 200px;
  height: 200px;
}

.item__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item__cart {
  width: 12px;
  height: 14px;
}

.item__cart svg {
  fill: $color-black;
  cursor: pointer;
}

.item__cart svg:hover {
  fill: $color-grey-light;
}
</style>
