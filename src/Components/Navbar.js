import React from 'react'
import '../Styles/Navbar.css'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div class="Nav">
      <div class="Logo">
        <img className='image' src={Logo} alt="Logo" />
      </div>
      <div className='btn-section'>
        <Link to='/'>
          <button type='button' class='btn btn-primary'>Home</button>
        </Link>
        <button type="button" class="btn btn-light">New Video +</button>
        <button type="button" class="btn btn-light"><i class="fa-solid fa-layer-group"></i>  Template</button>
        <button type="button" class="btn btn-light"><i class="fa-solid fa-video"></i>  All Video's</button>
        <button type="button" class="btn btn-light"><i class="fa-solid fa-podcast"></i>  Podcasts & Shows</button>
      </div>
    </div>
  )
}

export default Navbar
