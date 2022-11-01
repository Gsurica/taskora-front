import { background, Box, Button, Flex, Text } from "@chakra-ui/react"

interface MissionCardProps {
  title?: string
  description?: string
  isComplete?: boolean 
}

export const MissionCard: React.FC<MissionCardProps> = ({ title, description, isComplete }) => {
  return (
    <Flex
    bg="700"
    padding={10}
    borderRadius={10}
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    marginTop={4}
    >
      <Text
      color="50"
      letterSpacing={2}
      fontSize={18}
      >
        { title }
      </Text>
      <Flex
      bg="50"
      padding={10}
      marginTop={4}
      maxWidth={200}
      width="full"
      borderRadius={10}
      >
        { description }
      </Flex>
      { !isComplete ? (
        <Flex
        bg="50"
        padding={4}
        marginTop={4}
        borderRadius={10}
        >
          <Button
          bg="200"
          fontWeight="light"
          >
            Terminar
          </Button>
        </Flex>
      ) : null }
    </Flex>
  )
}