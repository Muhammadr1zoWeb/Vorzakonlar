import React from 'react'
import './Blog.css'

function Blog() {
  return (
    <div className='blog'>
       <div className="container my-5">
      <div className="card shadow-sm">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text text-muted">By Themadbrains in <span className="text-info">Inspiration</span></p>
              <h2 className="card-title">Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
              <p className="card-text text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sitamet,
                consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <button className="btn btn-success">Start learning now</button>
            </div>
          </div>
          <div className="col-md-4">
            {/* <img src="path-to-your-image/image.png" className="card-img" alt="Swift UI Article" /> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Blog
