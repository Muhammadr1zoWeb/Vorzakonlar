import React from 'react'
import './Course2.css'
import { Link } from 'react-router-dom'
import card__img1 from '../../assets/card__img1.png'
import card__img2 from '../../assets/card__img2.png'
import card__img3 from '../../assets/card__img3.png'
import avatar from '../../assets/card__avatar.png'


function Course2() {
  return (
    <section className='Course'>
        <div className="container">
            <div className='Course__box'>
                <div className="course__div1">
                    <h1 className='div__h1'>Welcome back, ready for your next lesson?</h1>
                    <Link className='div__a'>
                        View hisotry
                    </Link>
                </div>
                <div className="course__div2">
                    <Link to={'/course-detail'}>
                        <div className='card'>
                            <img className='card__img' src={card__img1} alt="" />
                            <div className='yozuvlar'>
                                <h3 className='card__h3'>AWS Certified Solutions Architect</h3>
                                <div className='card__div'>
                                    <img className='card__avatar' src={avatar} alt="" />
                                    <p className='div__p'>Lina</p>
                                </div>
                                <div className='card__bot'>

                                </div>
                            </div>
                            
                        </div>
                    </Link>

                    <Link to={'/course-detail'}>
                        <div className='card'>
                            <img className='card__img' src={card__img2} alt="" />
                            <div className="yozuvlar">
                                <h3 className='card__h3'>AWS Certified Solutions Architect</h3>
                                <div className='card__div'>
                                    <img className='card__avatar' src={avatar} alt="" />
                                    <p className='div__p'>Lina</p>
                                </div>
                                <div className='card__bot'>
                                    
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/course-detail'}>
                        <div className='card'>
                            <img className='card__img' src={card__img3} alt="" />
                            <div className="yozuvlar">
                                <h3 className='card__h3'>AWS Certified Solutions Architect</h3>
                                <div className='card__div'>
                                    <img className='card__avatar' src={avatar} alt="" />
                                    <p className='div__p'>Lina</p>
                                </div>
                                <div className='card__bot'>
                                    
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='card__control'>
                    <button className='control__btn'>
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <button className='control__btn'>
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Course2