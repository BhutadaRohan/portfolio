import data from '../../assets/data.json'

const Skills = () => {
  return (
    <section className='section' id="Skills">
      <h2 className='col-7 mx-auto text-center pt-4'>Skills</h2>
      <div  className="d-md-flex justify-content-around px-md-5 mx-md-5 pt-md-5 mt-md-3">
        <div className='col-md-4 col-10 mx-auto mt-md-3 mt-4 ms-md-5 mb-5'>
          <h2 style={{fontSize:"1.8rem"}}>Some Technologies I've Worked With </h2>
        </div>
        <div className='col-md-7 col-11 mx-auto px-3 mb-5'>
          <div 
          style={{backgroundColor:"#1c1d24"}} 
          className='row row-cols-3 row-cols-lg-6 g-2 g-lg-3 align-items-center p-3 shadow-lg rounded'
          >
          {  data.skills.list.map((skill,ind)=>
            <div className="col mt-1 mx-auto p-2 px-md-3" key={ind}>
              <div className="text-center">
                <img className='img-fluid' src={skill.link} alt="html" />
                <p className='mt-2'>{skill.name}</p>
              </div>
            </div>
            )
          }  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills