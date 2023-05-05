import { BrowserRouter, Routes, Route } from "react-router-dom"
import './Reset.css'
import './App.css'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Produtos from "./pages/Produtos"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/produtos" element={<Produtos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
