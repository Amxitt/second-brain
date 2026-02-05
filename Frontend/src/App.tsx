


import './App.css'
import Dashboard from './pages/Dashboard'
import { LandingPage } from './pages/LandingPage'
import { PublicBrains } from './pages/PublicBrain'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element= {<LandingPage/>}/>
          <Route path = "/signup" element ={<Signup/>} />
          <Route path = "/signin" element ={<Signin/>} />
          <Route path = "/dashboard" element ={<Dashboard/>} />
          <Route path="/brain/:share" element = {<PublicBrains/>} />
      </Routes>
    </BrowserRouter>
  )

  
}

export default App