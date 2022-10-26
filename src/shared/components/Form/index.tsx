import { Alert, AlertIcon, Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Stack, Text, VStack } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { createNewUser } from "../../../services/mutations/userMutations/createUserMutation"
import { loginuserMutation } from "../../../services/mutations/userMutations/loginUserMutation"
import { saveOnLocalStorage } from "../../functions/saveOnLocalStorage"
import { useNavigate } from "react-router-dom"

interface FormProps {
  login?: boolean
  register?: boolean
}

export const Forms: React.FC<FormProps> = ({ login, register }) => {

  const { mutate: createUser } = createNewUser()

  const redirect = useNavigate()
 
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      username: Yup.string().required("O nome de usuário é necessário.").min(6, "O nome de usuário é muito pequeno"),
      email: Yup.string().required("O e-mail com toda certeza é necessário :(").email(),
      password: Yup.string().required("Também é necessário! (lembre-se, deve ser secreto... shhh)").min(6, "A senha é muito curta! pense mais fundo!")
    }),

    onSubmit(_, formikHelpers) {
      formikHelpers.resetForm()
    }
  })

  if (register) {
    return (
      <Container marginTop={"50"}>
        <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} bg="900" padding="4" borderRadius="lg">

          <Flex flexDir="column" justifyContent={"center"} alignItems="center">
            <Heading color="white">Bem-vindo!</Heading>
            <Text color="white">Registre-se!</Text>
            <Link color="white" marginTop="4" href="/login">Já possui uma conta? Logue!</Link>
          </Flex>

          <FormControl isInvalid={formik.errors.username as boolean | undefined && formik.touched.username}>
            <FormLabel color="white">Username</FormLabel>
            <Input bg="white" placeholder="Usuário" {...formik.getFieldProps("username")} name="username"/>
            <FormErrorMessage>{ formik.errors.username }</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.email as boolean | undefined && formik.touched.email}>
            <FormLabel color="white">E-mail</FormLabel>
            <Input bg="white" {...formik.getFieldProps("email")} placeholder="E-mail" name="email" />
            <FormErrorMessage>{ formik.errors.email }</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.password as boolean | undefined && formik.touched.password}>
            <FormLabel color="white">Senha</FormLabel>
            <Input bg="white" {...formik.getFieldProps("password")} placeholder="Senha" name="password" />
            <FormErrorMessage>{ formik.errors.password }</FormErrorMessage>
          </FormControl>
          <Button bg="100" type="submit" _hover={
            {
              background:"700",
              color: "white",
            }
          } onClick={() => {
            createUser({ username: formik.values.username, email: formik.values.email, password: formik.values.password })
          }}>
            Register
          </Button>
        </VStack>
        </form>
      </Container>
    )
  }

  if (login) {

    const { mutate: loginUser, data, isSuccess} = loginuserMutation()

    if (isSuccess) {

      const token = data.token

      saveOnLocalStorage('token', token)

      redirect(`/home/${data.user.id}/${data.user.level}/${data.user.exp}`)
      
      return (

        <>
          <Alert status="success">
            <AlertIcon />
            Usuário logado com sucesso! manda ver!
          </Alert>
          <Forms login/>
        </>
      )
    }

    return (
      <Container marginTop={"50"}>

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4} bg="900" padding="4" borderRadius="lg">

            <Flex flexDir="column" justifyContent={"center"} alignItems="center">
              <Heading color="white">Bem-vindo!</Heading>
              <Text color="white">Logue!</Text>
              <Link color="white" marginTop="4" href="/register">Não possui uma conta? Registre-se!</Link>
            </Flex>

            <FormControl isInvalid={formik.errors.username as boolean | undefined && formik.touched.username}>
              <FormLabel color="white">Username</FormLabel>
              <Input bg="white" {...formik.getFieldProps("username")} name="username" placeholder="username"/>
              <FormErrorMessage>{ formik.errors.username }</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.password as boolean | undefined && formik.touched.password}>
              <FormLabel color="white">Senha</FormLabel>
              <Input bg="white" {...formik.getFieldProps("password")} name="password" placeholder="password" />
              <FormErrorMessage>{ formik.errors.password }</FormErrorMessage>
            </FormControl>
      
            <Button bg="100" type="submit" _hover={
              {
                background:"700",
                color: "white",
              }
            } onClick={() => {
              loginUser({ username: formik.values.username, password: formik.values.password })
            }
            }>
              Logar
            </Button>
          </Stack>
        </form>
      </Container>
    )
  }

  return (
    <></>
  )
}