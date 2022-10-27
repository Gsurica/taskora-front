import { Avatar, AvatarBadge, Box, Flex, Heading, Spacer, Text, transition, Wrap } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'

export const Header = () => {

  return (
    <Flex as="div" bg="#E9D8FD" alignItems="center" boxShadow="md">
      <Spacer />
      <Box as="button" padding="2" bg="300" borderRadius="md" _hover={
        {
          background: "200",
          cursor: "pointer",
        }
      }>
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
        <Box as="button">
          <Avatar>
            <AvatarBadge />
          </Avatar>
        </Box>
      </Box>
      <Spacer />
    </Flex>
  );
}
