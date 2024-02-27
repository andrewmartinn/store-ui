import {
  Card,
  CardBody,
  Text,
  Heading,
  Image,
  Stack,
  CardFooter,
  Button,
  Flex,
} from "@chakra-ui/react"
import cartStore from "../stores/CartStore"
import { observer } from "mobx-react"
import { FaHeart } from "react-icons/fa6"
import wishlistStore from "../stores/WishListStore"

const WishListItem = observer(({ item }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow='hidden'
      variant='outline'
      my={8}
      p={4}
    >
      <Image
        objectFit='cover'
        maxW={{ base: "100%", sm: "200px" }}
        src={item.image}
      />

      <Stack>
        <CardBody>
          <Flex>
            <Heading size='md'>{item.title}</Heading>
          </Flex>

          <Text py='2' fontSize='25px'>
            ${item.price}
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            onClick={() =>
              persistedWishlistStore.removeItemFromWishlist(item.id)
            }
            variant='solid'
            colorScheme='red'
          >
            Remove Item
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
})

export default WishListItem
