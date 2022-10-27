import { useNavigate } from "react-router-dom"

export const getTokenOnLocalStorage = (item: string) => {

  const redirect = useNavigate()

  const takedItem = localStorage.getItem(item)
  if (takedItem === null) {
    console.log('Não foi possivel adquirir o item requerido!')
    redirect('/login')
    return 
  }

  return {
    token: JSON.parse(takedItem)
  }
}