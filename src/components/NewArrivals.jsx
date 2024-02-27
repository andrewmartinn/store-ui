import { Box, Container, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ProductList from "./ProductList"

const NewArrivals = () => {
  return (
    <Box py='40px'>
      <Container maxW='8xl'>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Heading>New Arrivals</Heading>
          <Link
            to='/products'
            color='#f86438'
          >
            See All
          </Link>
        </Box>
        <ProductList />
      </Container>
    </Box>
  )
}

export default NewArrivals
