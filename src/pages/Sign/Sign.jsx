import React from 'react'
import './Sign.css'
import signgirl from '../../assets/signgirl.svg'
import { Link } from 'react-router-dom'

function Sign() {
  return (
    <div className='sign'>
      <div className="container">
        <div className="left__sign">
          <div className="control__sign">
          <img src={signgirl} alt="" />
        </div>

        <div className="login__right">
                <h1 className='login__right__title'>Welcome Back</h1>
                <div className='login__signup'>
                    <Link to={'/login'}>
                    Login
                    </Link>
                    <Link to={'/signup'}>
                    Register
                    </Link>
                </div>
                <form action="#" className='register__form'>
                <label>UserName</label>    
                <input className='register__form__inp' type="text" placeholder='Enter Your User Name'/>
                <label>Password</label>
                <input className='register__form__inp' type="text" placeholder='Enter Your Password'/>

                <div className="form__forget">
                    <div className="form__remember">
                        <input type="checkbox" />
                        <p>Remember Me</p>
                    </div>
                  <div className="form__password">
                    <Link>
                    Forgot Password
                    </Link>
                    </div>  
                </div>
                <button type='submit' className='register__btn'>Login</button>
                </form>                    
            </div>
            </div>
      </div>
    </div>
  )
}

export default Sign
