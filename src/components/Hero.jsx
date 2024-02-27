import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"
import { useColorModeValue } from "@chakra-ui/react"

const Hero = () => {
  const heroPlaceholderBg = useColorModeValue("gray.200", "whiteAlpha.200")
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr" }}
      py='50px'
      w='100%'
      overflow='hidden'
      height='600px'
      margin='0'
    >
      <GridItem>
        <VStack
          h='100%'
          display='flex'
          justifyContent='center'
          alignItems='flex-start'
          pl={12}
          gap={8}
        >
          <Heading
            fontSize='40px'
            pr={{ base: 0, md: 50, lg: 80 }}
          >
            Sort out Your Spring Look
          </Heading>
          <Text pr={{ base: 19, md: 50, lg: 80 }}>
            We will help to develop every smallest thing into a big one for your
            company
          </Text>
          <Button
            size='lg'
            bg='#f86438'
            color='white'
            w='auto'
          >
            Shop <FaChevronRight />
          </Button>
        </VStack>
      </GridItem>
      <GridItem display={{ base: "none", md: "grid", lg: "grid" }}>
        <Box
          h='500px'
          w='400px'
          bg={heroPlaceholderBg}
          position='absolute'
          top='180px'
          left='700px'
          display={{ base: "none", md: "none", lg: "block" }}
        />
        <Box
          h='500px'
          w='330px'
          bg={heroPlaceholderBg}
          position='absolute'
          left='100%' // Adjust the positioning to extend outside the screen
          transform='translateX(-100%)' // Move the box to the left to extend outside
          top='180px'
        />
      </GridItem>
    </Grid>
  )
}

export default Hero
