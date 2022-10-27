import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom"
import { Home } from "../../pages/Home/Home"
import { Register } from "../../pages/register/Register"
import { Login } from "../../pages/login/Login"
import { Header } from "../components/Header/Header"

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/home/:userId/:userLevel/:userExp" element={ <Home /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  )
}