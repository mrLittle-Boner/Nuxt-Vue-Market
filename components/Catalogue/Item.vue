<template>
  <li :class="[$style.item, itemInCart ? $style.item__selected : '']">
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
      {{ formatedPrice }} &#8381;
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
  computed: {
    formatedPrice () {
      return this.product.price.toString().match(/\d{3}/g).join(' ')
    },
    itemInCart () {
      return this.$store.state.itemsInCart.map(item => item.id).includes(this.product.id)
    }
  },
  methods: {
    addToCart (item) {
      if (this.itemInCart) {
        this.$store.commit('removeFromCart', item.id)
      } else {
        this.$store.commit('addItemToCart', item)
      }
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';
@import '~assets/css/mixins';

.item {
  position: relative;
  padding: 9px 7px 25px;
  display: grid;
  grid-template-columns: 32px 153px 1fr;
  grid-template-rows: repeat(3, auto);
  border: 1px solid transparent;
  border-radius: $border-radius-default;
  box-shadow: $box-shadow-card;
}

.item__selected {
  border-color: $color-grey-light;
}

.item__selected .item__cart svg {
  fill: $color-black ;
}

.item__name {
  grid-column: span 3;
  font-size: 1.4rem;
  margin-top: 16px;
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

.item__rating svg {
  width: 20px;
  height: 20px;
  padding: 3.12px;
  padding-bottom: 3.74px;
}

.item__rating span {
  @include bold-text(1rem);
  color: $color-star;
}

.item__photo {
  width: 153px;
  height: 180px;
  padding-left: 11px;
}

.item__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item__cart {
  width: 12px;
  height: 14px;
  margin-left: 30.29px;
}

.item__cart svg {
  fill: $color-grey-light;
  cursor: pointer;
}

.item__cart svg:hover {
  fill: $color-black;
}
</style>
