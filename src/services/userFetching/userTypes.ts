export interface IUser {
  token: string
  user: {
    avatar: string | null 
    email: string 
    exp: number
    id: string 
    level: number 
    password: string 
    username: string 
  }
}