import "./Contact.css"
import data from "../../assets/data.json"

const Contact = () => {
  return (
    <section style={{backgroundColor:"#1c1d24"}} className='section py-xs-5' id="Contact">
      <h2 className='col-7 mx-auto text-center pt-4'>Connect with me 🤝</h2>
      <div className="d-md-flex justify-content-around px-md-5 py-md-3 mx-md-5">
        <div className='col-md-6 col-10 mx-auto mt-3 d-flex justify-content-center align-items-center'>
          <div className="col-10 col-sm-9 col-lg-6 row row-cols-4 g-2 my-md-0 my-3">
            {
              data.contact.list.map((val)=>(
                <div className="col">
                  <div className="card p-2" onClick={()=> window.open(val.link, "_blank")}>
                    <div className='row g-0 d-flex align-items-center p-1'>
                      <img src={val.image} alt="..." />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <form className='col-md-6 col-lg-4 col-11 mx-auto  mt-3 shadow-lg contact-card'>
          <div className="form-floating mb-4">
            <input required type="text" className="form-control  ps-4" id="floatingInput1" placeholder="Enter you name.." />
            <label htmlFor="floatingInput" className='ps-4'>Your Full Name</label>
          </div>
          <div className="form-floating mb-4">
            <input required type="email" className="form-control ps-4" id="floatingInput2" placeholder="name@example.com" />
            <label htmlFor="floatingInput" className='ps-4'>Your Email address</label>
          </div>
          <div className="form-floating mb-4">
            <textarea required className="form-control ps-4" style={{height: "130px"}} placeholder="Leave your message here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea" className='ps-4'>Your Message</label>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-outline-primary col-md-7 rounded-pill mx-auto">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact