import { Button, Container, Flex, Heading, Input, Link, Stack, Text } from "@chakra-ui/react"

interface FormProps {
  login?: boolean
  register?: boolean
}

export const Form: React.FC<FormProps> = ({ login, register }) => {
  if (register) {
    return (
      <Container marginTop={"50"}>
        <Stack spacing={4} bg="900" padding="4" borderRadius="lg">
          <Flex flexDir="column" justifyContent={"center"} alignItems="center">
            <Heading color="white">Bem-vindo!</Heading>
            <Text color="white">Registre-se!</Text>
            <Link color="white" marginTop="4" href="/login">Já possui uma conta? Logue!</Link>
          </Flex>
          <Input bg="white" placeholder="username"/>
          <Input bg="white" placeholder="e-mail" />
          <Input bg="white" placeholder="password" />
          <Button bg="100" _hover={
            {
              background:"700",
              color: "white",
            }
          }>
            Register
          </Button>
        </Stack>
      </Container>
    )
  }

  if (login) {
    return (
      <Container marginTop={"50"}>
        <Stack spacing={4} bg="900" padding="4" borderRadius="lg">
          <Flex flexDir="column" justifyContent={"center"} alignItems="center">
            <Heading color="white">Bem-vindo!</Heading>
            <Text color="white">Logue!</Text>
            <Link color="white" marginTop="4" href="/register">Não possui uma conta? Registre-se!</Link>
          </Flex>
          <Input bg="white" placeholder="username"/>
          <Input bg="white" placeholder="password" />
          <Button bg="100" _hover={
            {
              background:"700",
              color: "white",
            }
          }>
            Logar
          </Button>
        </Stack>
      </Container>
    )
  }

  return (
    <></>
  )
}