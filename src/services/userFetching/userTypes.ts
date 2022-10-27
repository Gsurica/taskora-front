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

export interface IOnlyUserTypes {
  id: string
  avatar: string | null 
  email: string 
  exp: number
  level: number 
  missions: string[]
  password: string 
  username: string 
}