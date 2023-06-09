import React from 'react'
import img1 from '../images/webimg2.svg'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

export const Contfoot = () => {
  return (
    <>

  <footer
          class="text-center text-lg-start text-white"
          style={{background:"#141414",marginTop:"-4vh, "}}
          >
    <section
             className="d-flex justify-content-between p-4"
             style={{background:"#141414",zIndex:"-999"}}
             >
      <div className="me-5">
        
      </div>

      <div>
        <a href="/" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="/" className="text-white me-4">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>

    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold " style={{marginTop:"-7vh"}}><img src={img1} alt="" /></h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:"60px", background:"pink", height:"2px"}}
                />
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{marginTop:"-5vh"}}>
            
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto" 
                />
            <p>
              <a href="#!" className="text-white">Help Center</a>
            </p>
            <p>
              <a href="#!" className="text-white">Avada Studios</a>
            </p>
            <p>
              <a href="#!" className="text-white">Prebuilt website</a>
            </p>
            <p>
              <a href="#!" className="text-white">Reviews</a>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{marginTop:"-5vh"}}>
            
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto" 
                />
            <p>
              <a href="#!" className="text-white">Help Center</a>
            </p>
            <p>
              <a href="#!" className="text-white">Avada Studios</a>
            </p>
            <p>
              <a href="#!" className="text-white">Prebuilt website</a>
            </p>
            <p>
              <a href="#!" className="text-white">Reviews</a>
            </p>
          </div>

          

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{marginTop:"-5vh"}}>
            
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
               
                />
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> <AiOutlineInstagram></AiOutlineInstagram>  <BsTwitter></BsTwitter>  <BsFacebook></BsFacebook>  <BsLinkedin></BsLinkedin> </p>
          </div>
        </div>
      </div>
    </section>

    <div
         className="text-center p-3"
         style={{borderTop:"2px solid grey"}}
         >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/"
         >Avada Theme.com</a
        >
    </div>
  </footer>

    </>
  )
}
