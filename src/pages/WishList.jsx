import { Box, Heading, Container } from "@chakra-ui/react"
import { observer } from "mobx-react"
import wishlistStore from "../stores/WishListStore"
import WishListItem from "../components/WishListItem"

const WishList = observer(() => {
  const wishlist = wishlistStore.wishlist
  console.log(wishlist)

  if (!wishlistStore.wishlist) {
    return (
      <Heading fontSize='20px' textAlign='center'>
        No Items Added To Wishlist
      </Heading>
    )
  }

  return (
    <Box py='40px' px={{ base: "1rem", md: "0", lg: "0" }}>
      <Container maxW='8xl'>
        <Heading fontSize='25px'>Wishlist Items</Heading>
        <Box py={10}>
          {wishlist?.map((item) => (
            <WishListItem key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  )
})

export default WishList
