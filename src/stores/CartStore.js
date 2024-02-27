import { makeAutoObservable } from "mobx"

class CartStore {
  items = []

  constructor() {
    makeAutoObservable(this)
  }

  addItemToCart(product) {
    console.log("[cartStore addItemToCart]", product)
    this.items.push(product)
  }

  removeItemFromCart(productId) {
    // get the item index
    const productIndex = this.items.findIndex((item) => item.id === productId)

    // check if the item exists on items
    if (productIndex !== -1) {
      // copy the original array
      const updatedItemsArray = [...this.items]
      // remove item from the copied array
      updatedItemsArray.splice(productIndex, 1)
      // update the orginal array
      this.items = updatedItemsArray
    }
  }
  getCartCount() {
    return this.items.length
  }
}

const cartStore = new CartStore()
export default cartStore
