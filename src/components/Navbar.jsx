import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='d-flex justify-content-around p-3'>
      <img src="https://ogoslearning.com/assets/template/img/logo.jpg" alt="" style={{width:"100px", height:"50px", borderRadius:"20px"}} />
      <div className='d-flex align-items-center'>
        <h5 className='px-3'><Link to='/'>Home</Link></h5>
        <h5 className='px-3'><Link to='/userlist'>User</Link></h5>
        <h5>contact</h5>
      </div>
    </div>
  )
}

export default Navbar
