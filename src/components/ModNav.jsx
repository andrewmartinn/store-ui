import {
  Flex,
  Box,
  Text,
  HStack,
  VStack,
  Icon,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Image,
  Circle,
  Button,
} from "@chakra-ui/react"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaShoppingCart,
  FaHeart,
  FaRegUser,
} from "react-icons/fa"
import Logo from "../assets/logo.png"
import { PhoneIcon, HamburgerIcon } from "@chakra-ui/icons"
import DarkModeToggle from "./DarkModeToggle"
import { useColorModeValue } from "@chakra-ui/react"
import { observer } from "mobx-react"
import { Link } from "react-router-dom"
import cartStore from "../stores/CartStore"
import wishlistStore from "../stores/WishListStore"

const Navbar = observer(() => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const iconCircleBg = useColorModeValue("gray.800", "white")

  return (
    <Box>
      <Flex
        bg='#f86438'
        px={{ base: 4, md: 6, lg: 8 }}
        py={3}
        justifyContent='space-between'
        alignItems='center'
      >
        <Box
          display={{ base: "none", md: "flex", lg: "flex" }}
          alignItems='center'
          gap='5px'
        >
          <PhoneIcon />
          <Text>+022 319 821 967</Text>
        </Box>
        <Box>
          <Link to='/'>
            <Image
              src={Logo}
              height={{ base: "25px", md: "30px", lg: "30px" }}
            />
          </Link>
        </Box>
        <HStack
          display={{ base: "flex", md: "none", lg: "none" }}
          justifyContent='space-between'
          alignItems='center'
          gap={6}
        >
          <Link to='/cart'>
            <Button outline='none' background='none'>
              <FaShoppingCart />
              <Box>{cartStore.getCartCount()}</Box>
            </Button>
          </Link>
          <Link to='/wishlist'>
            <Button outline='none' background='none'>
              <FaHeart />
              <Box>{wishlistStore.getWishlistCount()}</Box>
            </Button>
          </Link>
          <Icon as={FaRegUser} boxSize={5} />
        </HStack>
        <Box display={{ base: "block", md: "none", lg: "none" }}>
          <IconButton
            onClick={onOpen}
            bg='transparent'
            _hover={{ bg: "transparent" }}
            icon={<HamburgerIcon boxSize={7} />}
          />
          <DarkModeToggle />
        </Box>
        <HStack gap={5} display={{ base: "none", md: "flex", lg: "flex" }}>
          <Circle size={35} border='2px' borderColor={iconCircleBg}>
            <FaFacebook />
          </Circle>
          <Circle size={35} border='2px' borderColor={iconCircleBg}>
            <FaTwitter />
          </Circle>
          <Circle size={35} border='2px' borderColor={iconCircleBg}>
            <FaInstagram />
          </Circle>
          <Circle size={35} border='2px' borderColor={iconCircleBg}>
            <FaYoutube />
          </Circle>
        </HStack>
      </Flex>
      <Flex
        bg='#f86438'
        px={8}
        py={3}
        justifyContent='space-between'
        alignItems='center'
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        <HStack spacing={6}>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>FAQ</Link>
          <Link to='/'>Blog</Link>
        </HStack>
        <HStack spacing={6}>
          <Link to='/cart'>
            <Button outline='none' background='none'>
              <FaShoppingCart />
              <Box>{cartStore.getCartCount()}</Box>
            </Button>
          </Link>

          <Link to='/wishlist'>
            <Button outline='none' background='none'>
              <FaHeart />
              <Box>{wishlistStore.getWishlistCount()}</Box>
            </Button>
          </Link>

          <Icon as={FaRegUser} boxSize={6} />
          <Box>
            <DarkModeToggle />
          </Box>
        </HStack>
      </Flex>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box py={10}>
              <VStack spacing={10}>
                <Link to='/' fontSize='20px'>
                  Home
                </Link>
                <Link to='/' fontSize='20px'>
                  About
                </Link>
                <Link to='/' fontSize='20px'>
                  FAQ
                </Link>
                <Link to='/' fontSize='20px'>
                  Blog
                </Link>
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
})

export default Navbar
