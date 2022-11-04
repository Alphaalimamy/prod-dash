import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../../images/logo.png"
import * as FaIcons from "react-icons/fa"
import { useState } from 'react'
const Header = () => {

  const [user, setUser] = useState(true)
  return (
    <div className='header-container'>
      <Link to="/" className="left-header">
        <img src={Logo} alt="" />
      </Link>

      <div className="right-header">
        <div className="right_header_acc" onClick={() => setUser(!user)}>
          {user ? (<Link to="/">
            <FaIcons.FaUserCircle />
            <span>Alpha</span>
          </Link>
          ) : (<Link to="/">
            <FaIcons.FaSignOutAlt />
            <span>Logout</span>
          </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header