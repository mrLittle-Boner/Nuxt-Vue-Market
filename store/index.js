export const state = () => ({
  showModal: false,
  items: [],
  itemsInCart: [],
  sortingType: '',
  shoppingDone: false
})

export const mutations = {
  setItems (state, items) {
    state.items = items
  },
  toggleModalCartWindow (state) {
    state.showModal = !state.showModal
  },
  addItemToCart (state, item) {
    state.itemsInCart.push(item)
  },
  removeFromCart (state, id) {
    const index = state.itemsInCart.findIndex(item => item.id === id)
    state.itemsInCart.splice(index, 1)
  },
  changeSortingType (state, sort) {
    state.sortingType = sort
  },
  clearCart (state) {
    state.itemsInCart = []
  },
  doneShopping (state) {
    state.shoppingDone = true
  }
}
