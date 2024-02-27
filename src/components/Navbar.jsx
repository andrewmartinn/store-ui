import {
  Box,
  Container,
  HStack,
  Flex,
  Text,
  Image,
  Stack,
  Circle,
  Spacer,
  VStack,
  useColorMode,
} from "@chakra-ui/react"
import { FaRegHeart } from "react-icons/fa6"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaShoppingCart,
  FaRegUser,
} from "react-icons/fa"
import { BsTelephone } from "react-icons/bs"
import Logo from "../assets/logo.png"
import LogoDark from "../assets/footer-logo.png"
import { color } from "framer-motion"

const Navbar = () => {
  const { colorMode } = useColorMode()
  return (
    <Box bg='#f86438'>
      <Container maxW='8xl'>
        <HStack
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          py={4}
        >
          <Flex
            alignItems='center'
            gap='10px'
            display={{ base: "none", md: "flex", lg: "flex" }}
          >
            <BsTelephone />
            <Text>+022 319 821 967</Text>
          </Flex>
          <Box>
            {colorMode === "light" ? (
              <Image
                src={Logo}
                height='30px'
              />
            ) : (
              <Image
                src={LogoDark}
                height='30px'
              />
            )}
          </Box>
          <HStack gap={3}>
            <Circle
              size={35}
              border='1px'
              borderColor='gray.800'
            >
              <FaFacebook />
            </Circle>
            <Circle
              size={35}
              border='1px'
              borderColor='gray.800'
            >
              <FaTwitter />
            </Circle>
            <Circle
              size={35}
              border='1px'
              borderColor='gray.800'
            >
              <FaInstagram />
            </Circle>
            <Circle
              size={35}
              border='1px'
              borderColor='gray.800'
            >
              <FaYoutube />
            </Circle>
          </HStack>
        </HStack>
        <Stack
          py={5}
          direction={{ base: "column", md: "row", lg: "row" }}
          align={{ base: "center" }}
          justify={{ base: "center" }}
        >
          <Box
            display='flex'
            alignItems='center'
            gap={6}
          >
            <Text fontWeight='bold'>Home</Text>
            <Text>About</Text>
            <Text>FAQ</Text>
            <Text>Blog</Text>
          </Box>
          <Spacer />
          <HStack gap={6}>
            <FaRegHeart size='26px' />
            <FaShoppingCart size='26px' />
            <FaRegUser size='26px' />
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
