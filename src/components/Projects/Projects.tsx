import data from "../../assets/data.json"

const Projects = () => {
  return (
    <section className='section py-xs-5' id="Projects">
      <h2 className='col-7 mx-auto text-center pt-4'>Projects</h2>
      <div className="mx-auto mt-2 col-md-10 pt-4 row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
        {
          data.projects.list.map((val)=>(
          <div className="col my-3 px-4" key={val.title}>
            <div className="card p-2" style={{backgroundColor:"#1c1d24",borderRadius:"10px"}}>
              <img 
                style={{height:"25vh"}}
                src={val.thumbnail}
                className="card-img-top rounded" alt="..." 
                />
              <div className="card-body">
                <h5 style={{color:"#f0932b"}} className="card-title fs-4">{val.title}</h5>
                {
                  val.skills.length > 0 && 
                  val.skills.map((skill)=>(
                    <span style={{color:"white",background:"#131416"}} className="badge py-2 me-1 mb-1">{skill}</span>
                  ))
                }
                <p className="card-text">{val.desc}</p>
                { 
                  val.livelink && 
                   <span style={{cursor:"pointer",color:"blue",background:"lightgrey"}} className="badge py-1 my-1" 
                    onClick={()=>{window.open(val.livelink,"_blank")}}>
                      Demo / Screenshots
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-arrow-up-right-circle ms-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                      </svg>
                  </span>
                }
                <br />
              </div>
            </div>
          </div>
          ))
        }
      </div>
        <p className='text-center p-5'>Hey, hey, hey... here is the link to visit my <a href="https://github.com/BhutadaRohan">GitHub!</a></p>
    </section>
  )
}

export default Projects