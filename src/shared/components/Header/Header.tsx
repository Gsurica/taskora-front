import { Avatar, Box, Flex, Heading, Spacer, Text, Wrap } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { FunctionComponent } from "react";

interface HeaderProps {
  
}
 
const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Flex as="div" bg="#E9D8FD" alignItems="center">
      <Spacer />
      <Box as="button" padding="2" bg="#B794F4" borderRadius="md">
        <HamburgerIcon />
      </Box>
      <Spacer />
      <Box> 
        <Flex alignItems="center" flexDirection="column">
          <Heading marginRight="2">1</Heading>
          <Text fontWeight="bold" color="white">Porcento</Text>
          <Text fontSize="smaller">Torne-se um porcento melhor.</Text>
        </Flex>
      </Box>
      <Spacer />
      <Box>
        <Wrap>
          <Avatar />
        </Wrap>
      </Box>
      <Spacer />
    </Flex>
  );
}
 
export default Header;