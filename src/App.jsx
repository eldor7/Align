import React from 'react'
import About from './components/HomePage/About'
import Blog from './components/HomePage/Blog'
import FooterPage from './components/HomePage/FooterPage'
import LandingPage from './components/HomePage/LandingPage'
import Navbar from './components/HomePage/Navbar'
import OtherPage from './components/HomePage/OtherPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <About/>
      <Blog/>
      <OtherPage/>
      <FooterPage/>
    </div>
  )
}

export default App