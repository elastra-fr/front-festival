//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Header from './components/header/header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'

function App() {
  

  return (
    <>

 <BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />

</Routes>
</BrowserRouter>

</>
  )
}

export default App
