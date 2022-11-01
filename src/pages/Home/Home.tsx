import { Container, Flex, Spinner, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { IOnlyUserTypes } from "../../services/userFetching/userTypes";
import { Mission } from "../../shared/components/missions/Mission";
import { ModalContent } from "../../shared/components/Modal/Modal";
import { getTokenOnLocalStorage } from "../../shared/functions/getTokenOnLocalStorage";
import { useFetch } from "../../shared/functions/useFetch";

export const Home: FunctionComponent= () => {

  const { userId } = useParams()
  const token = getTokenOnLocalStorage('token')?.token

  const { data, isLoading } = useFetch<IOnlyUserTypes>('user', `http://localhost:3333/user/${userId}`, token)

  console.log(data)

  return (
    <Container padding={3}>
      { isLoading && (
        <Spinner />
      ) }
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <ModalContent />
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
      <Flex
      marginTop={5}
      >
        <Mission />
      </Flex>
    </Container>
  );
}
 