import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/login'
import About from './components/about'
import Explore from  './components/explore'
import PageNotFound from './components/PageNotFound'
import EventHandling from './components/eventHandling'
import Count from './components/count'
import Todo from './components/Todo'
import ProductListing from './components/ProductListing'
import Weathercard from './components/Weathercard'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
     
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route> 
          <Route path="Explore" element={<Explore/>}></Route> 
          <Route path="*" element={<PageNotFound/>}></Route>
          <Route path="EventHandling" element={<EventHandling/>}></Route>
          <Route path="count" element={<Count/>}></Route>
          <Route path="Todo" element={<Todo/>}></Route>
          <Route path="ProductListing" element={<ProductListing/>}></Route>
          <Route path="Weathercard" element={<Weathercard/>}></Route>

          
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
