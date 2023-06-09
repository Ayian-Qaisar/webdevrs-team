import React from 'react'
import Button from 'react-bootstrap/Button';
import "../App.css"

const Videobanner = () => {
  return (
    <div>
      
        <div className='main' style={{position:'relative'}}>
        <video className='main' style={{width:'100%' ,objectFit:'cover' ,}}  loop  autoPlay muted src="https://cdn.shopify.com/s/files/1/0276/9790/5724/files/bike.mp4?v=1608988545">
        </video>
          <div style={{ width:'100%' ,height:'100%' , position:'absolute' ,bottom:'50px' ,left:'30px' ,top:'50%'}}>
          <h1  className='fw-bold txt' style={{color:'white'}}>GET OUT THERE <br /> FIND YOUR RACK TODAY.</h1>
          <Button className='bg-black btnnn ' variant="dark">SHOP NOW</Button>
          </div>
        </div>
    </div>
  )
}

export default Videobanner