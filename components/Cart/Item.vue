<template>
  <li :class="$style.item">
    <div :class="$style.item__photo">
      <img :src="'https://frontend-test.idaproject.com' + item.photo">
    </div>

    <div :class="$style.item__info">
      <div :class="$style.item__name">
        {{ item.name }}
      </div>
      <div :class="$style.item__price">
        {{ item.price }}
      </div>
      <div :class="$style.item__rating">
        <SVGsRating />
        <span>
          {{ item.rating }}
        </span>
      </div>
    </div>
    <div :class="$style.item__delete" @click="removeItem(item.id)">
      <SVGsTrashcan />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    removeItem (id) {
      this.$store.commit('removeFromCart', id)
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';
@import '~assets/css/mixins';

.item {
  display: flex;
  padding: 15px 15px 15px 25px;
  box-shadow: $box-shadow-card;
  border-radius: 8px;
}
.item__photo {
  width: 70px;
  height: 90px;
  margin-right: 34px;
}
.item__photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.item__info {
  flex-grow: 1;
  max-width: 170px;
  display: flex;
  flex-direction: column;
}
.item__price {
  font-size: 14px;
  font-weight: 700;
}
.item__name {
  font-size: 14px;
  margin-bottom: 6px;
}
.item__rating {
  font-size: 10px;
  color: $color-star;
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 4px
}
.item__delete {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.item__delete svg {
  fill : $color-grey-light;
  cursor: pointer;
}
.item__delete svg:hover {
  fill: $color-black;
}
</style>
