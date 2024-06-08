import React from 'react'
import Course2 from '../../components/Course2/Course2'
import Course3 from '../../components/Course3/Course3'
import Course4 from '../../components/Course4/Course4'
import Course5 from '../../components/Course5/Course5'
import Reklama from '../../components/Reklama/Reklama'

function Course() {
  return (
    <div className='course'>
      
      <Course2/>
      <Course3/>
      <Course4/>
      <Course5/>
      <Reklama/>
      <Course5/>
      <Course4/>
    </div>
  )
}

export default Course