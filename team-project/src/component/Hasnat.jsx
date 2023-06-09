import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Hasnat = () => {
  return (
    <>
      <Container fluid >
        <Row className='pb-2 pt-2'>
          <Col lg={3} md={3} sm={12} className='pb-2 pt-1' >
              <img src="https://avone-demo.myshopify.com/cdn/shop/files/bike-2_400x.jpg?v=1614780779" className='w-100' alt="" />
              <p className='fw-semibold mt-2'>BIKES</p>
              <p className='mt-3'>From road bikes to hybrids to mountain bikes, we'll get you on the right bike.</p>
              <Button variant="dark" className='rounded-0 h-btn'>SHOP NOW</Button>
          </Col>
          <Col lg={3} md={3} sm={12} className='pb-2 pt-1' >
              <img src="https://avone-demo.myshopify.com/cdn/shop/files/as_400x.jpg?v=1614780779" className='w-100' alt="" />
              <p className='fw-semibold mt-2'>APPAREL</p>
              <p className='mt-3'>Find the latest styles in road, city and mountain bike apparel</p>
              <Button variant="dark" className='rounded-0 h-btn'>SHOP APPAREL</Button>

          </Col>
          <Col lg={3} md={3} sm={12} className='pb-2 pt-1' >
              <img src="https://avone-demo.myshopify.com/cdn/shop/files/apparel_400x.jpg?v=1614780779" className='w-100' alt="" />
              <p className='fw-semibold mt-2'>ACCESSORIES</p>
              <p className='mt-3'>View all the cycling essentials to help enhance your riding</p>
              <Button variant="dark" className='rounded-0 h-btn'>SHOP NOW</Button>

          </Col>
          <Col lg={3} md={3} sm={12} className='pb-1 pt-1' >
              <img src="https://avone-demo.myshopify.com/cdn/shop/files/component_400x.jpg?v=1614780779" className='w-100' alt="" />
              <p className='fw-semibold mt-2'>COMPONENTS</p>
              <p className='mt-3'>Upgrade your bike from the best parts brands.</p>
              <Button variant="dark" className='rounded-0 h-btn'>SHOP NOW</Button>

          </Col>
        </Row>
      </Container>


    </>
  )
}

export default Hasnat