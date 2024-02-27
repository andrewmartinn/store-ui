import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "mobx-react"
import productsStore from "./stores/ProductStore"
import cartStore from "./stores/CartStore"
import wishlistStore from "./stores/WishListStore"

const queryClient = new QueryClient()

const stores = {
  productsStore,
  cartStore,
  wishlistStore,
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
