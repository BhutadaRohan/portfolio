import React,{useEffect, useState} from 'react';
import "./Navbar.css"

const Navbar = (props: any) => {
  const [show,setShow] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  const navbarControl = () => {
    if (window.scrollY < 30) {
    setScrolled(false)
    } else {
    setScrolled(true)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', navbarControl)
    return () => window.removeEventListener('scroll', navbarControl)
  },[])

  const sections = Array.from(document.querySelectorAll("section"));
  const navLi = document.querySelectorAll("nav .container-fluid ul li");
  window.onscroll = () => {
    var current:string|null = "" ;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      console.log(sectionTop,window.innerHeight,window.pageYOffset)
      if (window.pageYOffset >= sectionTop - 150  ) {
        current = section.getAttribute("id"); 
      }
    });
  
    navLi.forEach((li) => {
      const aLink = li.querySelectorAll("a");
      aLink[0].classList.remove("active");
      // console.log(aLink[0].innerText)
      if (current && aLink[0].innerText.includes(current)) {
        aLink[0].classList.add("active");
      }
    });
  };

  return (
    <>
      <nav className={`nav navbar navbar-expand-lg fixed-top ${scrolled && "nav_dark"} py-0`}>
        <div className="container-fluid py-0">
          <a className="navbar-brand mx-2" href="#Home"><h2>{`{ RB }`}</h2></a>
          <button className="navbar-toggler" type="button" onClick={()=>setShow(!show)} aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`offcanvas offcanvas-end bg-dark w-100 ${show?"show":""}`} tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header justify-content-end">
              {/* <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5> */}
              <button type="button" className="btn-close btn-close-white me-3 mt-2" onClick={()=>setShow(!show)} aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul 
                className="navbar-nav justify-content-md-end flex-grow-1 pe-3 text-center fs-md-5 fs-sm-4" 
              >
                <li className="nav-item me-md-4">
                  <a className="nav-link" onClick={()=>setShow(!show)} href="#Home">Home</a>
                </li>
                <li className="nav-item me-md-4">
                  <a className="nav-link" onClick={()=>setShow(!show)} href="#About" >About</a>
                </li>
                <li className="nav-item me-md-4">
                  <a className="nav-link" onClick={()=>setShow(!show)} href="#Skills">Skills</a>
                </li>
                <li className="nav-item me-md-4">
                  <a className="nav-link" onClick={()=>setShow(!show)} href="#Experience">Experience</a>
                </li>
                <li className="nav-item me-md-4">
                  <a className="nav-link" onClick={()=>setShow(!show)} href="#Projects">Projects</a>
                </li> 
                <li className="nav-item me-md-4">
                  <a className="nav-link" onClick={()=>setShow(!show)} href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        {show && <div className="offcanvas-backdrop fade show d-flex d-md-none"></div>}
        </div>
      </nav>
    </>
  )
}




export default Navbar