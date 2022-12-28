import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <section className='home pt-5' id="Home">
      <div className='col-md-6 d-flex d-md-block d-none'>
        <img className='img-fluid' src={require("../../assets/undraw_Coding_re_iv62.png")} alt="" />
      </div>
      <div className='col-md-4 col-sm-9 col-xs-11'>
        <div className="mt-5 pt-5 text-center">
          <h3> Hello, My name is </h3>
          <h1 className='fw-bold mb-4' style={{color:"#f0932b"}}> Rohan Bhutada</h1>
          <h3 className='fw-bold'>I enjoy building and designing for the web.</h3>
        </div>
        <div className='mx-auto col-10 d-flex justify-content-between my-5 py-5'>
          <a 
            className='btn btn-primary rounded-pill px-md-4' 
            href={require('../../assets/Rohan bhutada.pdf')} 
            download="Rohan_Bhutada_Resume"
            >
              Download CV
          </a>
          <button className='btn btn-outline-primary rounded-pill px-md-4' onClick={()=>{window.location.href = "#Contact"}}> Let's Talk </button>
        </div>
      </div>
      {/* <div className='col-md-2 mx-auto text-center text-light'>
        <p className='fs-4' onClick={()=>{window.location.href = "#About"}}> know more {">>"}</p>
      </div> */}
    </section>
  )
}

export default Home