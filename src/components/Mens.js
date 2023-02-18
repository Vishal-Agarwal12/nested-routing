import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Mens = () => {
  return (
    <div>
        <Link to='small'><h3>Small</h3></Link>
        <Link to='medium'><h3>Medium</h3></Link>

        <Outlet />
    </div>
  )
}

export default Mens
