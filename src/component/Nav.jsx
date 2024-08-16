import React from 'react'
import log from '../img/logo.png'
import { Link } from 'react-router-dom'

function Nav({handleclick}) {
  return (
    <nav className='Hoemnav'>
      <Link to='/'>      <div className='logodiv' >
    <img   src={log} alt="" height={100} onClick={handleclick}/>
    </div>
    </Link>

    <div className='nav-li '>
     
    </div>
    </nav>
  )
}

export default Nav