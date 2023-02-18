import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Fashion = () => {
  return (
    <div className='row justify-content-center'>
      
      <Link to='kids' className='col-auto'><h2>Kids</h2></Link>
      <Link to='mens' className='col-auto '><h2>Mens</h2></Link>
      <Link to='womens' className='col-auto'><h2>Womens</h2></Link>

      <Outlet />
    </div>
  )
}

export default Fashion
