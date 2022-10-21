import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom"
import { Home } from "../../pages/Home/Home"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}