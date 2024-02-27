import { useQuery } from "@tanstack/react-query"
import { Box, SimpleGrid } from "@chakra-ui/react"
import { ProductCard } from "./ProductCard"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useEffect } from "react"
import { observer } from "mobx-react"
import productsStore from "../stores/ProductStore"

const ProductList = observer(() => {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
  }

  const {
    data: products,
    isError: error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  useEffect(() => {
    if (products) {
      console.log("[useEffect productList]", products)
      productsStore.setProducts(products)
    }
  }, [products])

  // console.log("came here products", products)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  console.log(products, error, loading)
  return (
    <Box mt={10}>
      {products && (
        <Carousel responsive={responsive} draggable>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      )}
    </Box>
  )
})

export default ProductList
