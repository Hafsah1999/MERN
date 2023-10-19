import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
Data

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='Home' element={<Home />}></Route>
          <Route path='Gallery' element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
