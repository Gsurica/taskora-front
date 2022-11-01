import { Box, Flex, Text } from "@chakra-ui/react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { IMission } from "../../../interfaces/MissionInterfaces/IMisison"
import { IOnlyUserTypes } from "../../../services/userFetching/userTypes"
import { getTokenOnLocalStorage } from "../../functions/getTokenOnLocalStorage"
import { useFetch } from "../../functions/useFetch"
import { MissionCard } from "./MissionCard"

export const Mission = () => {

  const { userId } = useParams()
  const token = getTokenOnLocalStorage('token')?.token

  const { data, isLoading } = useFetch<IOnlyUserTypes>('mission', `http://localhost:3333/user/${userId}`, token)

  return (
    <Flex
    justifyContent="center"
    alignItems="center"
    flexDir="column"
    width="full"
    marginTop={3}
    >
      <Text
        fontWeight="bold"
        letterSpacing={2}
        mb="4"
      >Missões!</Text>
      <Box
      marginTop={4}
      >
        {
          data?.missions.map(mission => {
            return (
              <MissionCard key={mission.id} description={mission.description} title={mission.title} isComplete={mission.isComplete} />
            )
          })
        }
      </Box>
    </Flex>
  )
}