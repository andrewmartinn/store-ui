import { Box, Container, Text, Heading } from "@chakra-ui/react"
import ProductList from "./ProductList"

const BestSellers = () => {
  return (
    <Box py='40px'>
      <Container maxW='8xl'>
        <Box>
          <Heading>Best Seller</Heading>
        </Box>
        <ProductList />
      </Container>
    </Box>
  )
}

export default BestSellers
