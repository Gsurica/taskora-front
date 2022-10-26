import { useMutation } from "react-query"
import axios from 'axios'
import { IUser } from "../../userFetching/userTypes"

interface ILoginUser {
  username: string 
  password: string 
}

const loginUser = async ({ username, password }: ILoginUser) => {
  const response = await axios.post<IUser>('http://localhost:3333/user/login', { username, password })
  console.log(response.data)
  return response.data
}

export const loginuserMutation = () => {
  return useMutation(loginUser)
}

