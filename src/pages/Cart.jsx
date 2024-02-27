import { Box, Heading, Container } from "@chakra-ui/react"
import { observer } from "mobx-react"
import cartStore from "../stores/CartStore"
import CartItem from "../components/CartItem"

const Cart = observer(() => {
  // Access the items directly from the cartStore
  const cartItems = cartStore.items
  console.log(cartItems)

  if (!cartStore.items.length) {
    return (
      <Heading fontSize='20px' textAlign='center'>
        No Items Added To Cart
      </Heading>
    )
  }

  return (
    <Box py='40px' px={{ base: "1rem", md: "0", lg: "0" }}>
      <Container maxW='8xl'>
        <Heading fontSize='25px'>Cart Items</Heading>
        <Box py={10}>
          {cartItems?.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  )
})

export default Cart
