import {
  Grid,
  GridItem,
  Box,
  Container,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { fetchAllProducts } from "../api/api"
import { ProductCard } from "../components/ProductCard"
import { useState } from "react"
import Pagination from "../components/Pagination"

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(6)

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  })

  // get last item and first item index to slice the products array to restrict the number of produts displayed
  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const currentProducts = products?.slice(firstProductIndex, lastProductIndex)

  return (
    <Box
      py='40px'
      px={{ base: "1rem", md: "0", lg: "0" }}
    >
      <Container maxW='8xl'>
        <Heading
          textAlign='center'
          py='30px'
        >
          All Products
        </Heading>
        <Grid
          templateColumns='1fr 1fr 1fr'
          gap={10}
        >
          {products &&
            currentProducts?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        </Grid>
        <Pagination
          totalItems={products?.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </Box>
  )
}

export default AllProducts
