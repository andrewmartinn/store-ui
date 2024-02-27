import Footer from "./components/Footer"
import ModNav from "./components/ModNav"
import AllProducts from "./pages/AllProducts"
import Cart from "./pages/Cart"
import WishList from "./pages/WishList"

import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <ModNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<AllProducts />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
        <Route path='wishlist' element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
