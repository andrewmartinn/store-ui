import {
  Box,
  Text,
  Heading,
  Flex,
  Container,
  Image,
  VStack,
  Stack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import BestSellers from "../components/BestSellers"
import { FaRegStar, FaHeart } from "react-icons/fa"
import { observer } from "mobx-react"
import productsStore from "../stores/ProductStore"
import { useQuery } from "@tanstack/react-query"
import { useColorModeValue, useColorMode } from "@chakra-ui/react"

const ProductDetails = observer(() => {
  const { colorMode } = useColorMode()
  const { id } = useParams()
  const productId = Number(id)
  // const productsArray = toJS(productsStore.products)
  // console.log("Products", productsArray)
  // const product = productsStore.getProductById(productId)
  // console.log(product)

  // const fetchProductById = async (tempId) => {
  //   // const id = queryKey[1]
  //   const response = await fetch(`https://fakestoreapi.com/products/${tempId}`)
  //   const data = await response.json()
  //   console.log(data)
  //   return data
  // }
  const fetchProductById = async ({ queryKey }) => {
    const id = queryKey[1]
    // console.log(queryKey)
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!response.ok) {
      throw new Error("Failed to fetch the project")
    }
    return response.json()
  }

  const {
    data: product,
    isError: error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: fetchProductById,
  })
  console.log("[productDetails]", product)

  console.log(product, error, loading)

  return (
    <Box py='150px'>
      {product && (
        <Container maxW='8xl'>
          <Flex
            gap={20}
            flexDirection={{ base: "column", md: "row", lg: "row" }}
          >
            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={5}>
              <Image src={product.image} height='90%' />
              <Image
                src={product.image}
                height='90%'
                display={{ base: "none", md: "none", lg: "grid" }}
              />
              <Image
                src={product.image}
                height='90%'
                display={{ base: "none", md: "none", lg: "grid" }}
              />
              <Image
                src={product.image}
                height='90%'
                display={{ base: "none", md: "grid", lg: "grid" }}
              />
            </SimpleGrid>
            <Box>
              <Heading py='30px'>{product.title}</Heading>
              <Text color='#f86438' fontSize='30px' fontWeight='bold' mb='50px'>
                $109.95
              </Text>
              <Stack>
                <Text>{product.description}</Text>
                <Flex gap={5} mt={20}>
                  <Button bg='#f86438' color='white' w='80%' size='lg'>
                    Add To Cart
                  </Button>
                  <Button w='20%' size='lg'>
                    <FaHeart />
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Flex>
          <BestSellers />
        </Container>
      )}
    </Box>
  )
})

export default ProductDetails
