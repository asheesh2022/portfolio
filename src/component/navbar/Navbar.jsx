import React, { useState } from 'react'
import "./navbar.css"
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          {/* <div className='logo'>
            <img src={logo} alt='' />
          </div> */}

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
             
              <li>
                <a href='#features'>skills</a>
              </li>
              <li>
                <a href='#portfolio'>projects</a>
              </li>
              <li>
                <a href='#resume'>education</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>

            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
         
        </div>
      </header>
    </>
  )
}

export default Navbar
