import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Text, VStack } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { IInput } from "../../../interfaces/InputsInterface/IInput"

interface modalProps {
  children: React.ReactNode
  title: string
  buttons?: React.ReactNode
}

export const Modal: React.FC<modalProps> = ({ children, title, buttons }) => {
  return (
    <Flex
    flexDir="column"
    bg="700"
    borderRadius="10"
    padding="10"
    maxWidth={300}
    width="full"
    justifyContent="space-around"
    alignItems="center"
    >
      <Text
      fontWeight="bold"
      letterSpacing="2"
      padding="2"
      color="white"
      >
        { title }
      </Text>
      <Flex
      fontWeight="light"
      flexDir="column"
      justifyContent="space-around"
      alignItems="center"
      >
        { children }
      </Flex>
      <Flex
      justifyContent="space-around"
      alignItems="center"
      >
        { buttons }
      </Flex>
    </Flex>
  )
}

interface ModalContentProps {
  inputValues: IInput[]
}

export const ModalContent: React.FC<ModalContentProps> = ({ inputValues }) => {


  const formik = useFormik({
    initialValues: {
      Title: '',
      Description: '',
    },

    validationSchema: Yup.object({
      Title: Yup.string().required("O titulo da missão é necessário!").min(5, "Coloque um titulo maior!"),
      Description: Yup.string().required("Precisamos saber o que você pretende fazer!"),
    }),

    onSubmit(_, formikHelpers) {
      formikHelpers.resetForm()
    }
  })

  return (
    <Modal title="Criar uma missão">
      <Box
      maxWidth={200}
      width="full"
      bg="white"
      color="black"
      textAlign="center"
      height="full"
      padding="5"
      borderRadius="10"
      mb="4"
      > 
      Cria sua missão!!
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} bg="900" padding="4" borderRadius="lg">

          <FormControl isInvalid={formik.errors.Title as boolean | undefined && formik.touched.Title}>
            <FormLabel color="white">Titulo!</FormLabel>
            <Input bg="white" placeholder="Título!" {...formik.getFieldProps("Title")} name="Title"/>
            <FormErrorMessage>{ formik.errors.Title }</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.Description as boolean | undefined && formik.touched.Description}>
            <FormLabel color="white">Descrição!</FormLabel>
            <Input bg="white" placeholder="Descrição Simples!" {...formik.getFieldProps("Description")} name="Description"/>
            <FormErrorMessage>{ formik.errors.Description }</FormErrorMessage>
          </FormControl>

          <Button>
            Criar
          </Button>

        </VStack>
      </form>
    </Modal>
  )
}