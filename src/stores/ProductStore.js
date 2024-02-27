import { makeAutoObservable } from "mobx"

class ProductStore {
  // create state variable
  products = []

  // observe changes to product state
  constructor() {
    makeAutoObservable(this)
  }

  // set products
  setProducts(newProducts) {
    console.log("came here Store 1", this.products)

    this.products = newProducts
  }

  // get single product by id
  getProductById(id) {
    console.log("came here Store 2", this.products)

    return this.products.find((product) => product.id === id)
  }
}

// create new instance of product store
const productsStore = new ProductStore()
// export product store instance
export default productsStore
