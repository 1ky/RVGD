import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <Box width="100%">
        <SearchInput />
      </Box>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
