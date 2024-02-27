import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"
import { useColorModeValue } from "@chakra-ui/react"

const Categories = () => {
  const cardBg = useColorModeValue("gray.200", "whiteAlpha.200")

  return (
    <Box
      py='40px'
      px={{ base: "1rem", md: "0", lg: "0" }}
    >
      <Container maxW='8xl'>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 10 }}
        >
          <Box
            h='480px'
            w={{ base: "100%", md: "350px", lg: "420px" }}
            bg={cardBg}
          >
            <Box
              pt='250px'
              px='30px'
            >
              <Heading fontSize={{ base: "30px", lg: "40px" }}>
                Electronics
              </Heading>
              <Text
                py='15px'
                color='gray.400'
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, et.
              </Text>
              <Button
                bg='#f86438'
                borderRadius='50%'
                padding='5px'
                mt='20px'
              >
                <FaArrowRight
                  color='white'
                  size='20px'
                />
              </Button>
            </Box>
          </Box>
          <Box
            h='480px'
            w={{ base: "100%", md: "350px", lg: "420px" }}
            bg={cardBg}
          >
            <Box
              pt='250px'
              px='30px'
            >
              <Heading fontSize={{ base: "30px", lg: "40px" }}>
                Jewellery
              </Heading>
              <Text
                py='15px'
                color='gray.400'
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, et.
              </Text>
              <Button
                bg='#f86438'
                borderRadius='50%'
                padding='5px'
                mt='20px'
              >
                <FaArrowRight
                  color='white'
                  size='20px'
                />
              </Button>
            </Box>
          </Box>
          <Box
            h='480px'
            w={{ base: "100%", md: "350px", lg: "420px" }}
            bg={cardBg}
          >
            <Box
              pt='250px'
              px='30px'
            >
              <Heading fontSize={{ base: "30px", lg: "40px" }}>
                Men's Clothing
              </Heading>
              <Text
                py='15px'
                color='gray.400'
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, et.
              </Text>
              <Button
                bg='#f86438'
                borderRadius='50%'
                padding='5px'
                mt='20px'
              >
                <FaArrowRight
                  color='white'
                  size='20px'
                />
              </Button>
            </Box>
          </Box>
          <Box
            h='480px'
            w={{ base: "100%", md: "350px", lg: "420px" }}
            bg={cardBg}
          >
            <Box
              pt='250px'
              px='30px'
            >
              <Heading fontSize={{ base: "30px", lg: "40px" }}>
                Women's Clothing
              </Heading>
              <Text
                py='15px'
                color='gray.400'
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt, et.
              </Text>
              <Button
                bg='#f86438'
                borderRadius='50%'
                padding='5px'
                mt='20px'
              >
                <FaArrowRight
                  color='white'
                  size='20px'
                />
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Categories
