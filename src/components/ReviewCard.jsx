import { Card, CardHeader, CardBody, Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
const ReviewCard = () => {
  const cardBg = useColorModeValue("fff0eb", "whiteAlpha.200")
  return (
    <Card
      my='100px'
      bg={cardBg}
    >
      <CardHeader>
        <Box
          h='70px'
          w='70px'
          bg='gray.200'
          borderRadius='50%'
          position='absolute'
          top={{ base: "-10%", md: "-10%" }}
          left={{ base: "42%", md: "46%" }}
        ></Box>
      </CardHeader>
      <CardBody px={{ base: "40px" }}>
        <Text
          mb='40px'
          fontSize={{ base: "12px" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ea
          ullam id natus odio similique, possimus fugit enim harum numquam
          itaque sunt nam quidem deleniti accusamus quia nihil sapiente in
          sequi. Labore commodi totam consequuntur dolore?
        </Text>
        <Text
          fontSize={{ base: "15px", md: "24px", lg: "24px" }}
          textAlign='center'
          fontWeight='bold'
        >
          Shalima Hayden
        </Text>
        <Text
          textAlign='center'
          py='20px'
        >
          Product Designer
        </Text>
      </CardBody>
    </Card>
  )
}

export default ReviewCard
