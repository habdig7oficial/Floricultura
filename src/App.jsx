import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home"

export default function App(){
  return(
    <>  
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <Home /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}