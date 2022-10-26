import axios from "axios"
import { useQuery, UseQueryOptions } from "react-query"
import { loggedUserKey } from "./userKeys"
import { IUser } from "./userTypes"

export const getLoggedUser = (userId: string, options?: UseQueryOptions<IUser>) => {
  return useQuery(loggedUserKey(userId), 
  () => axios.get(`http://localhost:3333/user/${userId}`).then(response => response.data), 
  options)
}