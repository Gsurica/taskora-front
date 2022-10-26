import axios from "axios";
import { useMutation } from "react-query";

interface INewUser {
  username: string 
  email: string 
  password: string 
}

const createUser = async ({ username, email, password }: INewUser) => {
  const response = await axios.post('http://localhost:3333/user', { username, email, password })
  return response.data
}


export const createNewUser = () => {
  return useMutation(createUser)
}