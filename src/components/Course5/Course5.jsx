import React from 'react'
import './Course5.css'
import { Link } from 'react-router-dom'
import Course4__img1 from '../../assets/Course4__img1.png'
import Course4__img2 from '../../assets/Course4__img2.png'
import avatar from '../../assets/card__avatar.png'
import kvadrat from '../../assets/kvadrat.png'
import soat from '../../assets/soat.png'

function Course5() {
  return (
    <section className='Course5'>
        <div className="container">
        <div className='Course4__box'>
          <h1 className='Course4__h1'>Recommended for you</h1>
          <Link className='Course4__a'>
            See all
          </Link>
        </div>


       <div className="Course4__wrapper">
          <Link to={'/course-detail'}>
          <div className='Course4__div'>
            <img className='course4__img' src={Course4__img1} alt="" />
                <div className='course4__box2'>
                  <div>
                  <img src={kvadrat} alt="" />
                    <p>Design</p>
                  </div>
                  <div>
                    <img src={soat} alt="" />
                    <p>3 Months</p>
                  </div>
            </div>
            <h3 className='course4__h3'>AWS Certified solutions Architect</h3>
            <p className='course4__p'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='Course4__div2'>
              <div>
                <img className='course4__avatar' src={avatar} alt="" />
                <p>Luna</p>
              </div>
            </div>
          </div>
            </Link>
          <Link to={'/course-detail'}>
          <div className='Course4__div'>
            <img className='course4__img' src={Course4__img2} alt="" />
            <div className='course4__box2'>
                  <div>
                  <img src={kvadrat} alt="" />
                    <p>Design</p>
                  </div>
                  <div>
                    <img src={soat} alt="" />
                    <p>3 Months</p>
                  </div>
            </div>
            <h3 className='course4__h3'>AWS Certified solutions Architect</h3>
            <p className='course4__p'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='Course4__div2'>
              <div>
                <img className='course4__avatar' src={avatar} alt="" />
                <p>Luna</p>
              </div>
            </div>
          </div>
            </Link>
          <Link to={'/course-detail'}>
          <div className='Course4__div'>
            <img className='course4__img' src={Course4__img1} alt="" />
                <div className='course4__box2'>
                  <div>
                  <img src={kvadrat} alt="" />
                    <p>Design</p>
                  </div>
                  <div>
                    <img src={soat} alt="" />
                    <p>3 Months</p>
                  </div>
            </div>
            <h3 className='course4__h3'>AWS Certified solutions Architect</h3>
            <p className='course4__p'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='Course4__div2'>
              <div>
                <img className='course4__avatar' src={avatar} alt="" />
                <p>Luna</p>
              </div>
            </div>
          </div>
            </Link>
          <Link to={'/course-detail'}>
          <div className='Course4__div'>
            <img className='course4__img' src={Course4__img2} alt="" />
            <div className='course4__box2'>
                  <div>
                  <img src={kvadrat} alt="" />
                    <p>Design</p>
                  </div>
                  <div>
                    <img src={soat} alt="" />
                    <p>3 Months</p>
                  </div>
            </div>
            <h3 className='course4__h3'>AWS Certified solutions Architect</h3>
            <p className='course4__p'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <div className='Course4__div2'>
              <div>
                <img className='course4__avatar' src={avatar} alt="" />
                <p>Luna</p>
              </div>
            </div>
          </div>
            </Link>
       </div>
        </div>
    </section>
  )
}

export default Course5