import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Image,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react"
import { FaRegHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useColorModeValue, useColorMode } from "@chakra-ui/react"
import { observer } from "mobx-react"
import cartStore from "../stores/CartStore"
import wishlistStore from "../stores/WishListStore"

export const ProductCard = observer(({ product }) => {
  const itemInWishlist = wishlistStore.isItemInWishlist(product.id)
  console.log(itemInWishlist)

  const textColor = useColorModeValue("gray.800", "gray.50")
  const cardBg = useColorModeValue("gray.200", "whiteAlpha.200")
  const wishListButtonBg = itemInWishlist ? "#f86438" : "#fff"

  // console.log("came here product 2", product)
  return (
    <Card
      bg={cardBg}
      maxW={{ base: "350px" }}
      h='550px'
      mr={{ base: 0, md: 2, lg: 4 }}
    >
      <CardHeader>
        <Link to={`/products/${product.id}`}>
          <Image
            src={product.image}
            height='200px'
            margin='auto'
            mt={10}
            pt={2}
          />
        </Link>
        <Button
          bg={wishListButtonBg}
          height='50px'
          borderRadius='full'
          position='absolute'
          top='10px'
          right='10px'
          onClick={() => wishlistStore.addItemToWishlist(product)}
        >
          <FaRegHeart size='20px' color={itemInWishlist ? "#fff" : "#f86438"} />
        </Button>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} textAlign='center'>
          <Text color='#f86438'>
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </Text>
          <Heading fontSize='20px' color={textColor}>
            {product.title.substring(0, 19) + "..."}
          </Heading>
          <Text fontSize='12px' color={textColor}>
            {product.category}
          </Text>
          <Text fontSize='24px' fontWeight='bold' color='#f86438'>
            ${product.price}
          </Text>
          <Button
            size='lg'
            bg='#f86438'
            color='white'
            onClick={() => cartStore.addItemToCart(product)}
          >
            Add To Cart
          </Button>
        </VStack>
      </CardBody>
    </Card>
  )
})
