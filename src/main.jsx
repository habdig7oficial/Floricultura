import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css' 

import "./assets/CSS/reset.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/CSS/style.css"

//import bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
