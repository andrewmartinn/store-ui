import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Image,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react"
import cartStore from "../stores/CartStore"
import { observer } from "mobx-react"

const CartItem = observer(({ item }) => {
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
          <Heading size='md'>{item.title}</Heading>

          <Text py='2' fontSize='25px'>
            ${item.price}
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            onClick={() => cartStore.removeItemFromCart(item.id)}
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

export default CartItem
