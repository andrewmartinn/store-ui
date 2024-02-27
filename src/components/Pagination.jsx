import { Box, Button, Stack } from "@chakra-ui/react"

const Pagination = ({
  totalItems,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  // calcuate the total amount of pages required to display all the products
  const totalPages = []
  for (let i = 1; i <= Math.ceil(totalItems / productsPerPage); i++) {
    totalPages.push(i)
  }

  //   if (currentPage < totalPages.length) {
  //     console.log(currentPage, true)
  //   }

  return (
    <Box
      py={10}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        spacing={10}
        direction='row'
      >
        {totalPages.map((page, index) => (
          <Button
            key={index}
            size='lg'
            bg='#f86438'
            color='white'
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}
      </Stack>
    </Box>
  )
}

export default Pagination
