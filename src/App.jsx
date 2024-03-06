//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Header from './components/header/header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Infos from './pages/infos/Infos'
import Faq from './pages/faq/Faq'

function App() {
  

  return (
    <>

 <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/infos" element={<Infos />} />
<Route path="/faq" element={<Faq />} />

</Routes>
</BrowserRouter>

</>
  )
}

export default App
