import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing'
import Signup from './Signup/Signup'
import Signp from './Signup/Signp'
import SignU from './Signup/SignU'
import SignUp_ from './Signup/SignUp_'
import Login from './Signup/Login'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Explore from './Components/Explore'

const App = () => {
  return (
   <>
 
<BrowserRouter>

  
<Routes>
  <Route path="/" element={<Landing/>} />
  <Route path="/Signup" element={<Signup />} />
  <Route path="/Signp" element={<Signp />} />
  <Route path="/SignU" element={<SignU />} />
  <Route path="/SignUp_" element={<SignUp_ />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Home" element={<Home/>} />
  <Route path="/AboutUs" element={<AboutUs/>} />
  <Route path="/Explore" element={<Explore/>} />






</Routes>
</BrowserRouter>

   </>
  )
}

export default App