import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import logo1 from '../../assets/img/logo1.png'
import logo2 from '../../assets/img/logo2.png'


function Header() {
  let location = useLocation().pathname
  
  return (
    <div className='header' style={{backgroundColor: location == '/' ? "#49BBBD" : '#ffff'} }>
      <header className='container '>
        <nav className='nav__head'>
        <img src={location == '/'? logo1 : logo2} alt="" />
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link style={{color: location == '/' ? 'white' : 'black'}}
               to={'/'}>Home</Link>
              </li>
            <li className='nav__item'>
              <Link
              style={{color: location == '/' ? 'white' : 'black'}}
              to={'/cource'}>Courses</Link>
              </li>
            <li className='nav__item'>
              <Link
              style={{color: location == '/' ? 'white' : 'black'}}
              to={'/careers'}>Careers</Link>
              </li>
            <li className='nav__item'>
              <Link 
              style={{color: location == '/' ? 'white' : 'black'}}
              to={'/blog'}>Blog</Link>
              </li>
            <li className='nav__item'>
              <Link
              style={{color: location == '/' ? 'white' : 'black'}}
              to={'/about-us'}>About Us</Link>
              </li>
              {
              location == '/' ?
             <div className='login__link__div'>
               <li className=' login__link'>
              <Link to={'/login'}>
                Login
              </Link>
            </li>
            <li className=' signup__link'>
              <Link to={'/signup'}>
                Sign Up
              </Link>
            </li>
             </div> :
               <div className='login__link__div__right'>
                 <img src="" alt="" />
                 <select >
                  <option>
                    Lina
                  </option>
                  <option>
                    shoxrux
                  </option>
                   <option>
                    education
                  </option>
                 </select>
               </div>
            }

          </ul>
         
        </nav>
      </header>
    </div>
  )
}

export default Header

