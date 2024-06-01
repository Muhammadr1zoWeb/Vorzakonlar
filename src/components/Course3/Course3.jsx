import React from 'react'
import './Course3.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'

function Course3() {
  return (
    <section className='Course3'>
        <div className="container">
            <h1 className='Course3__h1'>Choice favourite course from top category</h1>


            <ul className="Course3__list">
                <li className="Course3__item">
                    <div className='Course3__img1' >
                        <img src={img1} alt="" />
                    </div>
                    <h4 className='item__h4'>Design</h4>
                    <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li className="Course3__item">
                    <div className='Course3__img1' >
                        <img src={img2} alt="" />
                    </div>
                    <h4 className='item__h4'>Development</h4>
                    <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li className="Course3__item">
                    <div className='Course3__img1' >
                        <img src={img3} alt="" />
                    </div>
                    <h4 className='item__h4'>Development</h4>
                    <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li className="Course3__item">
                    <div className='Course3__img1' >
                        <img src={img4} alt="" />
                    </div>
                    <h4 className='item__h4'>Business</h4>
                    <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li className="Course3__item">
                    <div className='Course3__img1' >
                        <img src={img5} alt="" />
                    </div>
                    <h4 className='item__h4'>Marketing</h4>
                    <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li className="Course3__item">
                    <div className='Course3__img1' >
                        <img src={img6} alt="" />
                    </div>
                    <h4 className='item__h4'>Photography</h4>
                    <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li className="Course3__item">
                    <div className='Course3__img1' >
                        <img src={img7} alt="" />
                    </div>
                    <h4 className='item__h4'>Acting</h4>
                    <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li className="Course3__item">
                    <div className='Course3__img1' >
                        <img src={img4} alt="" />
                    </div>
                    <h4 className='item__h4'>Business</h4>
                    <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
            </ul>
            {/* <br /><br /><br /><br /><br /><br /> */}
        </div>
    </section>
  )
}

export default Course3