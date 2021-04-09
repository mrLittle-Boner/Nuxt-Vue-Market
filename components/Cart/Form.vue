<template>
  <form :class="$style.form" @submit.prevent="submit">
    <h3 :class="$style.form__title">
      Оформить заказ
    </h3>
    <input :class="$style.form__input" type="text" placeholder="Ваше Имя" required>
    <input :class="$style.form__input" type="text" placeholder="Телефон" required>
    <input :class="$style.form__input" type="text" placeholder="Адрес" required>
    <button :class="$style.button">
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
  .button {
    width: 100%;
    background-color: #1F1F1F;
    border-radius: 8px;
    color: white;
    text-align: center;
    padding: 14px 0 15px 0;
    border: none;
    cursor: pointer;
    margin-top: 24px;

    &:hover {
      background-color: #59606D;;
    }
  }
  .form {

    &__title {
      font-size: 18px;
      font-weight: 400;
      color: #59606D;
      margin-bottom: 16px;
    }

    &__input {
      background: #F8F8F8;
      border-radius: 8px;
      border: none;
      padding: 14px 14px 15px 14px;
      width: 100%;

      &:not(:last-of-type) {
        margin-bottom: 16px;
      }
    }
  }
</style>
