import { Box, Container, Text, Heading, Button } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"

const Banner = () => {
  return (
    <Box
      py='40px'
      px={{ base: "1rem", md: "0", lg: "0" }}
    >
      <Container
        bg='#f86438'
        color='white'
        maxW={{ base: "md", md: "3xl", lg: "7xl" }}
        h={{ base: "500px", lg: "600px" }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        gap='50px'
      >
        <Text
          fontWeight='bold'
          fontSize='22px'
        >
          March Discount
        </Text>
        <Heading fontSize={{ base: "40px", md: "60px" }}>Up to 70% Off</Heading>
        <Button
          size='lg'
          bg='white'
          color='#f86438'
        >
          Got it <FaChevronRight />
        </Button>
      </Container>
    </Box>
  )
}

export default Banner
