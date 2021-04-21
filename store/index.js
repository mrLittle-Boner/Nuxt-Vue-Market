export const state = () => ({
  showModal: false,
  items: [],
  itemsInCart: [],
  currentCategory: 0,
  sortingType: 'rating',
  ascendDirection: true,
  shoppingDone: false,
  pioa: '123'
})

export const mutations = {
  setItems (state, items) {
    state.items = items
  },
  setCurrentCategory (state, num) {
    state.currentCategory = num
  },
  toggleModalCartWindow (state) {
    state.showModal = !state.showModal
  },
  toggleSortingDirection (state) {
    state.ascendDirection = !state.ascendDirection
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
  toggleShoppingStatus (state) {
    state.shoppingDone = !state.shoppingDone
  }
}
