import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Map from "./component/Map"
import SideBar from "./component/SideBar"
import ProfilePage from "./pages/ProfilePage"
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/map' element={<Map/>} />
      <Route path='/myprofile' element={<ProfilePage/>} />



    </Routes>
  </BrowserRouter>
  )
}

export default App
