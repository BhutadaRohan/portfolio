import data from "../../assets/data.json"
import "./About.css"

const About = () => {
  return (
    <section id="About" className='section' style={{backgroundColor:"#1c1d24"}}>
      <h2 className='col-7 mx-auto text-center pt-4'>About <span style={{color:"#f0932b"}}>me</span></h2>
      <div className="d-md-flex justify-content-between px-md-5 py-md-3 mx-md-5">
        <div className='col-md-4 col-10 mx-auto mt-3'>
          <div className='profile-2 p-2 ps-4 shadow-lg'>
            <div className='profile p-2 me-2'>
              <img src={require("../../assets/PHOTO.png")} className="img-fluid me-3 mt-2 profile w-100" alt="profile" />
            </div>
          </div>
        </div>
        <div className='col-md-8 col-11 mx-auto pt-2 pt-md-5 mt-3 px-md-3'>
          <div className='col-md-9 d-flex flex-row justify-content-around mx-auto d-grid gap-3'>
            <div className="card col-5 shadow-lg" style={{backgroundColor:"#131416"}}>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold py-2">Experience</h5>
                <h6 className="card-subtitle text-muted fw-bold">{data.about.experience}</h6>                
              </div>
            </div>
            <div className="card col-5 shadow-lg" style={{backgroundColor:"#131416"}}>
              <div className="card-body text-center">
                <h5 className="card-title fw-bold py-2">Projects</h5>
                <h6 className="card-subtitle text-muted fw-bold">{data.about.projects}</h6>     
              </div>
          </div>
        </div>
        <p className='col-11 mx-auto ms-md-5 mt-md-5 mt-3 fs-5 px-md-3 pb-5 text-justify'>
          {data.about.text}
        </p>
      </div>
    </div>
  </section>
  )
}

export default About;