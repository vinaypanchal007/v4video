import React from 'react'
import Navbar from './Navbar.js';
import '../Styles/MainPage.css';
import Home from './Home.js'

function HomePage() {
  return (
    <div className='main'>
      <div className='leftside'>
        <Navbar />
      </div>
      <div className='rightside'>
        <Home />
      </div>
    </div>
  )
}

export default HomePage
