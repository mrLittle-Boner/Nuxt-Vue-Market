<template>
  <form :class="$style.form" @submit.prevent="submit">
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
  methods: {
    submit () {
      this.$store.commit('clearCart')
      this.$store.commit('doneShopping')
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';

.form__button {
  width: 100%;
  background-color: $color-black;
  border-radius: 8px;
  color: white;
  text-align: center;
  padding: 14px 0 15px 0;
  border: none;
  cursor: pointer;
  margin-top: 24px;
}
.form__button:hover {
  background-color: $color-grey;
}
.form__title {
  font-size: 18px;
  font-weight: 400;
  color: $color-grey;
  margin-bottom: 16px;
}
.form__input {
  background: $color-grey-extra-light;
  border-radius: 8px;
  border: none;
  padding: 14px 14px 15px 14px;
  width: 100%;
}
.form__input:not(:last-of-type) {
  margin-bottom: 16px;
}
</style>
