import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Box, Container, Heading } from "@chakra-ui/react"
import ReviewCard from "./ReviewCard"

const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Box
      py='40px'
      px={{ base: "1rem", md: "0", lg: "0" }}
    >
      <Container maxW={{ base: "md", md: "3xl", lg: "5xl" }}>
        <Heading textAlign='center'>What Our Customer Says</Heading>

        <Carousel responsive={responsive}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Carousel>
      </Container>
    </Box>
  )
}

export default Reviews
