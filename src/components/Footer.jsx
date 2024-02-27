import {
  Container,
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"

import FooterLogo from "../assets/footer-logo.png"

const Footer = () => {
  return (
    <Box
      bg='#f86438'
      color='white'
      px={{ base: "1rem", md: "0", lg: "0" }}
    >
      <Container maxW='8xl'>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
          placeContent='center'
          gap={{ base: 100, md: 250, lg: 300 }}
          py='100px'
        >
          <GridItem>
            <Image
              src={FooterLogo}
              h='40px'
            />
            <Text pt={4}>
              OurStudio is a digital agency in UI/UX Design and Website
              Development located in Ohio, United States of America
            </Text>
          </GridItem>
          <GridItem pt={{ base: "0", lg: "60px" }}>
            <Stack>
              <Text
                fontWeight='bold'
                pb={3}
              >
                Our Social Media
              </Text>
              <Text>Facebook</Text>
              <Text>Twitter</Text>
              <Text>Instagram</Text>
              <Text>Youtube</Text>
            </Stack>
          </GridItem>
          <GridItem pt={{ base: "0", lg: "80px" }}>
            <Text
              fontWeight='bold'
              pb={5}
            >
              Contact
            </Text>
            <Stack>
              <Box
                display='flex'
                alignItems='center'
                gap={5}
                mb={6}
              >
                <FaLocationDot />
                <Text>8819 Ohio St. South Gate, California 90280</Text>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                gap={5}
                mb={6}
              >
                <MdEmail />
                <Text>ourstudio@hello.com</Text>
              </Box>
              <Box
                display='flex'
                alignItems='center'
                gap={5}
                mb={6}
              >
                <BsTelephone />
                <Text>+271 386-647-3637</Text>
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
