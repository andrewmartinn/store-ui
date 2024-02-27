import { SunIcon, MoonIcon } from "@chakra-ui/icons"
// import useColorMode hook from chakra
import { useColorMode, IconButton } from "@chakra-ui/react"

const DarkModeToggle = () => {
  // destructre current color mode and toggle color function mode from useColorMode hook
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  )
}

export default DarkModeToggle
