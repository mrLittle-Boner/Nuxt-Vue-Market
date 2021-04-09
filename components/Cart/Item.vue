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
  .item {
    display: flex;

    padding: 15px 15px 15px 25px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    &__photo {
      width: 70px;
      height: 90px;
      margin-right: 34px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__info {
      flex-grow: 1;
      max-width: 170px;
      display: flex;
      flex-direction: column;
    }

    &__price {
      font-size: 14px;
      font-weight: 700;
    }

    &__name {
      font-size: 14px;
      margin-bottom: 6px;
    }

    &__rating {
      font-size: 10px;
      color: #F2C94C;
      margin-top: auto;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    &__delete {
      margin-left: auto;
      display: flex;
      align-items: center;

      svg {
        fill : #959DAD;
        cursor: pointer;

        &:hover {
          fill: black;
        }
      }
    }
  }
</style>
