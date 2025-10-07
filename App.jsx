import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Course from './Components/Course'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Course/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App