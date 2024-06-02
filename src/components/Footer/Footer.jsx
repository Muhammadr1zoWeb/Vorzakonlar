import React from 'react'
import './Footer.css'
import footer__logo from '../../assets/img/footer__logo.svg'

function Footer() {
  return (
    <div className='footer'>
          <div className="container">
            <div className="footer__logo">
              <img src={footer__logo} alt="" />
              <span className='footer__span'></span>
              <h4 className='footer__text'>Virtual Class <br /> For Zoom</h4>
            </div>
            <h3 className='footer__sub'>SubScribe to get our Newsletter</h3>

            <form className='footer__form' action="#">
              <input type="text" placeholder='Your Email' />
              <button>SubScirbe</button>
            </form>
            <div className="footer__bottom">
              <p>Careers</p>
              <span></span>
              <p>Privicy Policy</p>
              <span></span>
              <p>Terms & Conditions</p>

              <p className='footer__data'>© 2021 Class Technologies Inc. </p>
            </div>
          </div>
    </div>
  )
}

export default Footer
