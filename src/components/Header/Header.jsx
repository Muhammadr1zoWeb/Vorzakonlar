import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logo1 from '../../assets/img/logo1.png'
import logo2 from '../../assets/img/logo2.png'


function Header() {
  let location = useLocation().pathname
  
  return (
    <div className='header' style={{backgroundColor: location == '/' ? "#49BBBD": '#ffff'} }>
      <header className='container '>
        <nav className='nav__head'>
        <img src={location == '/'? logo1 : logo2} alt="" />
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link to={'/'}>Home</Link>
              </li>
            <li className='nav__item'>
              <Link to={'/cource'}>Courses</Link>
              </li>
            <li className='nav__item'>
              <Link to={'/careers'}>Careers</Link>
              </li>
            <li className='nav__item'>
              <Link to={'/blog'}>Blog</Link>
              </li>
            <li className='nav__item'>
              <Link to={'/about-us'}>About Us</Link>
              </li>
              {
          location == '/' ? 
          <div className='Log__sig'>
            <button className='btn btn-light'>Login In</button>
            <button className='btn btn-light'>Sign Up</button>
          </div> :  
          <div className='log__avat'>
            <button className='btn btn-light'>avater</button>
          </div>
          }
          </ul>
         
        </nav>
      </header>
    </div>
  )
}

export default Header

