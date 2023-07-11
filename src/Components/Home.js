import React from 'react'
import '../Styles/Home.css'
import Beach from '../images/beach.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className='searchbar'>
        <input type="text" className="search" placeholder="Search" />
        <button className='btn-upgrade btn-light'>Upgrade</button>
        <button className='btn-invite btn-light'>Invite +</button>
        <i class="fa-solid fa-user fa-xl"></i>
      </div>
      <div className='para'>
        <h1>Let's create some<b> Videos!</b></h1>
      </div>
      <div className='btns'>
        <Link to='/Editor'>
          <button type="button" class="btn btn-warning">Edit Videos</button>
        </Link>
        <Link to='/Record_Video'>
          <button type="button" class="btn btn-warning">Record Videos</button>
        </Link>
        <Link to='Record_Podcast'>
          <button type="button" class="btn btn-warning">Record Podcast</button>
        </Link>
        <Link to='Go_Live'>
          <button type="button" class="btn btn-warning">Go Live</button>
        </Link>
      </div>
      <div className='p'>
        <h4 className='pa'>My Recent Videos</h4>
      </div>
      <div className='carditem'>
        <div class="card">
          <img src={Beach} class="card-img-top" alt='beach' />
          <div class="text">
            <h6 class="card-text">Project Name</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
