<template>
  <div v-if="isShowModal" :class="$style.modal">
    <div :class="$style.container">
      <button :class="$style.close" @click="toggle">
        <SVGsClose />
      </button>

      <h3 :class="$style.title">
        Корзина
      </h3>

      <div v-if="itemsInCart.length < 1 && !isDone" class="cart_noitems">
        <div :class="$style.noitems">
          Пока что вы ничего не добавили в корзину.
        </div>
        <button :class="$style.button" @click="toggle">
          Перейти к выбору
        </button>
      </div>

      <div v-if="itemsInCart.length >= 1 && !isDone">
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
    })
  }
}
</script>

<style module lang="scss">
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
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
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding: 52px 48px;
  }
  .title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  .noitems {
    font-size: 22px;
    width: 90%;
  }
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
    font-size: 18px;
    color: #59606D;
    margin-bottom: 16px;
  }
  .items {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    row-gap: 16px;
  }
  .done {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      display: flex;
      margin-bottom: 24px;
    }

    span:nth-child(2) {
      font-size: 24px;
      font-weight: 700;
    }
    span:nth-child(3) {
      margin-bottom: 100px;
    }
  }
</style>
