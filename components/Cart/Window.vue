<template>
  <div v-if="isShowModal" :class="$style.modal" @click.self="closeWindow">
    <div :class="$style.container">
      <button :class="$style.close" @click="closeWindow">
        <SVGsClose />
      </button>

      <h3 :class="$style.title">
        Корзина
      </h3>

      <div v-if="itemsInCart.length < 1 && !isDone" class="cart_noitems">
        <div :class="$style.noitems">
          Пока что вы ничего не добавили в корзину.
        </div>
        <button :class="$style.button" @click="closeWindow">
          Перейти к выбору
        </button>
      </div>

      <div v-if="itemsInCart.length >= 1 && !isDone" :class="$style.wrapper">
        <div :class="$style.content">
          <div :class="$style.text">
            Товары в корзине
          </div>

          <ul :class="$style.items">
            <CartItem
              v-for="item in itemsInCart"
              :key="item.id"
              :item="item"
            />
          </ul>
        </div>

        <CartForm />
      </div>

      <div v-if="isDone" :class="$style.done">
        <div>
          <img src="~assets/ok.png">
        </div>
        <span>Завяка успешно отправлена</span>
        <span>Вскоре наш менеджер свяжется с Вами</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    isShowModal () {
      return this.$store.state.showModal
    },
    itemsInCart () {
      return this.$store.state.itemsInCart
    },
    isDone () {
      return this.$store.state.shoppingDone
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'toggleModalCartWindow'
    }),
    closeWindow () {
      if (this.isDone) {
        this.$store.commit('toggleShoppingStatus')
      }
      this.$store.commit('toggleModalCartWindow')
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/css/variables';
@import '~assets/css/mixins';

.ordered {
  order: -1;
}

.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}

.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 102vw;
  left: 0;
  z-index: 2;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
}

.container {
  background-color: white;
  position: absolute;
  max-width: 460px;
  overflow: auto;
  right: 32px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  padding: 52px 48px;
}

.title {
  @include bold-text(3.2rem);
  margin-bottom: 24px;
}

.noitems {
  font-size: 2.2rem;
  width: 90%;
}

.button {
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

.button:hover {
  background-color: $color-grey;
}

.close {
  position: absolute;
  background-color: white;
  border: none;
  right: 50px;
  top: 69px;
  display: flex;
  cursor: pointer;
}

.text {
  font-size: 1.8rem;
  color: $color-grey;
  margin-bottom: 16px;
}

.items {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.done {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.done img {
  display: flex;
  margin-bottom: 24px;
}

.done span:nth-child(2) {
  @include bold-text(2.4rem)
}

.done span:nth-child(3) {
  font-size: 1.6rem;
  margin-bottom: 100px;
}

</style>
