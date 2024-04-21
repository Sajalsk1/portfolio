import React from 'react'
import './Navbar.css'
import Toggle from './Toggle/Toggle'

const Navbar = () => {
  return (
    <div className="nav-wrap"style={{fontFamily:'Roboto'}}>
        <div className="nav-left">
            <div className="nav-name" style={{fontFamily:'Roboto'}}>Sajal Khandelwal</div>
         <Toggle/>
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul style={{listStyle:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiences</li>
                    <li>Contact</li>
                </ul>
            </div>
            <button className="button i-btn" style={{fontFamily:'Noto sans',fontSize:'1rem'}}>Contact</button>
        </div>
    </div>
  )
}

export default Navbar