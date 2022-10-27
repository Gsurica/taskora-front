import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { IOnlyUserTypes } from "../../services/userFetching/userTypes";
import { getTokenOnLocalStorage } from "../../shared/functions/getTokenOnLocalStorage";

export const Home: FunctionComponent= () => {

  const { userId } = useParams()
  const token = getTokenOnLocalStorage('token')?.token

  const { data, isLoading } = useQuery<IOnlyUserTypes>('user', async () => {
    const response = await axios.get(`http://localhost:3333/user/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token,
      }
    })
    return response.data
  })

  return (
    <Container padding={3} >
      { isLoading && (
        <Spinner />
      ) }
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text>Bem-vindo!</Text>
        <Text 
        fontSize="24" 
        letterSpacing={5} 
        marginTop={2}
        marginBottom={2}
        fontWeight="bold"
        color="50"
        padding="4"
        bg="700"
        borderRadius={10}
        boxShadow="lg"
        >
          { data?.username }
        </Text>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center">
        <Flex
        bg="500"
        height="10"
        width="10"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        >
          <Text 
          color="50"
          >{ data?.level }</Text>
        </Flex>
        <Flex
        bg="500"
        height="10"
        width="10"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        >
          <Text
          color="50"
          >{ data?.exp }</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center">
        <Flex 
        alignItems="center"
        justifyContent="center"
        >
          <Text
          fontWeight="bold"
          letterSpacing="wide"
          marginTop="2"
          >Level</Text>
        </Flex>
        <Flex
        alignItems="center"
        justifyContent="center"
        >
          <Text
          fontWeight="bold"
          letterSpacing="wide"
          marginTop="2"
          >Exp</Text>
        </Flex>
      </Flex>
    </Container>
  );
}
 