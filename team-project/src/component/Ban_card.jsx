import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img1 from '../images/webimg1.png'

function Ban_card() {
  return (
     <>
       <div style={{width:"95%",minHeight:"65vh",borderRadius:"10px",background:"#B7F598",margin:"auto",padding:"60px", zIndex:"9999"}}>
          <Row> 
            <Col lg={6} md={12} sm={12} style={{height:"45vh",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start"}}> 
                <h1 style={{fontSize:"3rem",}}>Build Successful Websites With Avada</h1>
                <p>Whether you are a beginner, marketer, or professional,<br/> Avada has the tools & resources you can rely on to succeed.</p>
                <button className='mb-5' style={{padding:"15px 45px",fontSize:"25px",border:"none",borderRadius:"10px",background:"#282828",color:"white"}}>Buy Avada for 69$</button>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <img style={{width:"100%",height:"auto"}} src={img1} alt="" />
            </Col>
          </Row>
       </div>
     </>
  )
}

export default Ban_card