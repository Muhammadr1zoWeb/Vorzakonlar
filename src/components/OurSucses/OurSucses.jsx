import React from 'react'
import './OurSucses.css'
import { Link } from 'react-router-dom'
import leftpng from '../../assets/leftgirlvv.svg'
import rightpng from '../../assets/rightgirlvv.svg'
import doc1 from '../../assets/doc1.png'
import doc3 from '../../assets/doc3.png'
import majlis1 from '../../assets/majlis1.svg'
import doc2 from '../../assets/doc2.png'
import sweetgirl from '../../assets/sweetgirl.svg'
import travelright from '../../assets/travelright.svg'

function OurSucses() {
  return (
    <div className='OurSucses container'>
      <div className="Success">
        <div className="container">
          <div className="container">
            <h1 className='success__title'>Our Success</h1>
            <p className='success__text'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>

            <div className="success__div">
              <div className="success__item">
                <h1>15K+</h1>
                <p>Students</p>
              </div>

              <div className="success__item">
                <h1>75 %</h1>
                <p>Total success</p>
              </div>

              <div className="success__item">
                <h1>35</h1>
                <p>Main questions</p>
              </div>

              <div className="success__item">
                <h1>26</h1>
                <p>Chief experts</p>
              </div>

              <div className="success__item">
                <h1>16</h1>
                <p>Years of experience</p>
              </div>
            </div>


            <h1 className='software__title'>All-In-One <span>Cloud Software.</span></h1>
            <p className='software__des'>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>

            <div className="software__div">
              <div className="software__item">
                <img src={doc1} alt="" />
                <h2>Online Billing <br /> Invoicing, & Contracts</h2>
                <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
              </div>

              <div className="software__item">
                <img src={doc2} alt="" />
                <h2>Easy Scheduling & <br /> Attendance Tracking</h2>
                <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
              </div>

              <div className="software__item">
                <img src={doc3} alt="" />
                <h2>Customer Tracking  <br /> Attendance Tracking</h2>
                <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
              </div>
            </div>


            <div className="totc">
              <h1 className='totc__title'>What is <span>TOTC?</span></h1>
              <p className='totc__text'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>

              <div className="totc__div">
                <div className="totc__left">
                  <img src={leftpng} alt="" />
                  <div className="totc__laft">
                    <h3>FOR INSTRUCTORS</h3>
                  </div>
                </div>

                <div className="totc__right">
                    <img src={rightpng} alt="" />
                  <div className="totc__rught">
                    <h3></h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="class">
              <div className="class__left">
                <h2>Everything you can do in a physical classroom, <span>you can do with TOTC</span></h2>
                <p>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <Link>Learn more</Link>
              </div>

              <div className="class__right">
                  <img src={majlis1} alt="" />
                <button className='btn__md'>

                </button>
              </div>
            </div>

            <div className="feature">
              <h1 className='feature__title'>Our <span>Features</span></h1>
              <p className='feature__text'>This very extraordinary feature, can make learning activities more efficient</p>

              <div className="feature__div">
                <div className="feature__left">

                </div>

                <div className="feature__right">
                  <h1 className='feature__totle'>A <span>user interface</span> designed <br /> for the classroom</h1>

                  <div className="feature__right__div">

                    <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                  </div>
                  <div className="feature__right__div">

                    <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                  </div>
                  <div className="feature__right__div">

                    <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="teacher">
              <div className="teacher__left">
                <h1 className='teacher__title'><span>Tools</span> For Teachers And Learners</h1>
                <p className='teacher__text'>Class has a dynamic set of teachinhg tools built to be deployed and used during class.Teachers can handout assignments in real-time for students to complete and submit.</p>
              </div>

              <div className="teacher__right">
                <img src={sweetgirl} alt="" />
              </div>


            </div>
            <button className='last__btn'>See More Features</button>
          </div>
          <div className="travel__succes">
            <div className="travel__left">
              <img src={travelright} alt="" />
            </div>
            <div className="travel__right">
              <h1 className='travel__title'>Assessments, <span>Quizzes</span>, Tests</h1>
              <p className='travel__dis'>Lorem ipsuzm, dolor sit amet consectetur adipisicing elit. Ut consequatur ab a laborum ex hic illum maiores velit ipsam dolor.</p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurSucses
