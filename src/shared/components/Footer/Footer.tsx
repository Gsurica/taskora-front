import { ArrowUpIcon, MoonIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
 
export const Footer: FunctionComponent = () => {

  const handleUp = () => {
    window.moveTo(0, 0)
  }
  
  return (
    <Flex as="div" bg="#E9D8FD" alignItems="center" padding="3">
      <Spacer />
      <Box as="button" padding="2" bg="#B794F4" borderRadius="md" onClick={handleUp}>
        <ArrowUpIcon />
      </Box>
      <Spacer />
      <Box> 
        <Flex alignItems="center" flexDirection="column">
          <Heading marginRight="2">1</Heading>
          <Text fontWeight="bold" color="white">Porcento</Text>
        </Flex>
      </Box>
      <Spacer />
      <Box as="button" padding="1" borderRadius="sm">
        <MoonIcon />
      </Box>
      <Spacer />
    </Flex>
  );
}
 