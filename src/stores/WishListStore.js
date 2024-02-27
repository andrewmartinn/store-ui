import { makeAutoObservable } from "mobx"
// import { create, persist } from "mobx-persist"

class WishListStore {
  wishlist = []

  constructor() {
    makeAutoObservable(this)
  }

  addItemToWishlist(product) {
    console.log("[wishlist addItemToWishlist]", product)
    this.wishlist.push(product)
  }

  removeItemFromWishlist(productId) {
    // get the item index
    const productIndex = this.wishlist.findIndex(
      (item) => item.id === productId
    )

    // check if the item exists on items
    if (productIndex !== -1) {
      // copy the original array
      const updatedItemsArray = [...this.wishlist]
      // remove item from the copied array
      updatedItemsArray.splice(productIndex, 1)
      // update the orginal array
      this.wishlist = updatedItemsArray
    }
  }

  isItemInWishlist(productId) {
    // console.log(productId, "wishlist check")
    // // if item found return true else return false
    // const result = this.wishlist.find((item) => item.id === productId)
    // console.log(result)

    // console.log("wishlist check", productId)
    const result = this.wishlist.find((item) => {
      console.log("Checking item:", item.id, " against productId:", productId)
      return item.id === productId
    })
    // console.log("Result:", result)
    return result
  }

  getWishlistCount() {
    return this.wishlist.length
  }
}

const wishlistStore = new WishListStore()
export default wishlistStore

//using the create method initalize a hydrate instance
//hydrate instance is later used to invoke the hydration method to load the data back to the store
// const hydrate = create()
// // instance of wishlist store
// const wishlistStore = new WishListStore()
// // create a new persisted store instance and wrap your store instance with a key
// const persistedWishlistStore = persist("wishListStore", wishlistStore)
// // load the data from storage using the hydrate function
// hydrate("wishListStore", persistedWishlistStore).then(() => {
//   console.log("Wishlist store has been hydrated")
// })

// // export the persisted store instance
// export default persistedWishlistStore
