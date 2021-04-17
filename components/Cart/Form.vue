<template>
  <form :class="[$style.form, amountCartItems > 6 ? $style.ordered : '']" @submit.prevent="submit">
    <h3 :class="$style.form__title">
      Оформить заказ
    </h3>
    <input :class="$style.form__input" type="text" placeholder="Ваше Имя" required>
    <input :class="$style.form__input" type="text" placeholder="Телефон" required>
    <input :class="$style.form__input" type="text" placeholder="Адрес" required>
    <button :class="$style.form__button">
      Отправить
    </button>
  </form>
</template>

<script>
export default {
  computed: {
    amountCartItems () {
      return this.$store.state.itemsInCart.length
    }
  },
  methods: {
    submit () {
      this.$store.commit('clearCart')
      this.$store.commit('toggleShoppingStatus')
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';

.ordered {
  order: -1;
}

.form__button {
  width: 100%;
  background-color: $color-black;
  border-radius: $border-radius-default;
  color: white;
  text-align: center;
  padding: 14px 0 15px 0;
  border: none;
  cursor: pointer;
  margin-top: 24px;
  font-size: 1.6rem;
}
.form__button:hover {
  background-color: $color-grey;
}
.form__title {
  font-size: 1.8rem;
  font-weight: 400;
  color: $color-grey;
  margin-bottom: 16px;
}
.form__input {
  background: $color-grey-extra-light;
  border-radius: $border-radius-default;
  border: none;
  font-size: 1.6rem;
  color: $color-black;
  padding: 0 15px;
  height: 50px;
  width: 100%;
  font-family: inherit;
}
.form__input::placeholder {
  color: $color-grey-light;
}
.form__input:not(:last-of-type) {
  margin-bottom: 16px;
}
</style>
