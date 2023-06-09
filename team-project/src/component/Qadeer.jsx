import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import pic1 from '../images/qadeerImg1.webp'
import pic2 from '../images/qadeerImg2.webp'
import pic3 from '../images/qadeerImg3.jpg'
import pic4 from '../images/qadeerImg4.jpg'
import pic5 from '../images/qadeerImg5.webp'
import pic6 from '../images/qadeerImg6.webp'

function Qadeer() {
  return (
    <>
     <div className="qadeerComponentContainer">

     <h1  className=' all_heading text-center fw-bolder'>All-In-One Website Builder</h1>
      <p className='text-center'>Experience total control over your website creation process.</p>
            <Container >
                <Row>
                    <Col className=" pic_box mt-5 px-4" lg={4} md={6} sm={12}>
                        <img src={pic1} alt="" />
                        <h4 className='text-center mt-4'>120+ Design Elements</h4>
                        <p className='text-center mt-4 text-secondary'>Packed with options, they are highly flexible for any design & for any purpose. The only limit is your imagination.</p>
                    </Col>
                    <Col className="pic_box mt-5 px-4" lg={4} md={6} sm={12}>
                        <img src={pic2} alt="" />
                        <h4 className='text-center mt-4'>Mobile Friendly</h4>
                        <p className='text-center mt-4 text-secondary'>Avada is 100% fluid & responsive across all device types, from mobile to desktop & tablets, with no compromise.</p>
                    </Col>
                    <Col className="pic_box mt-5 px-4" lg={4} md={6} sm={12}>
                    <img src={pic3} alt="" />
                    <h4 className='text-center mt-4'>83 Prebuilt Websites</h4>
                        <p className='text-center mt-4 text-secondary'>Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.</p>
                    </Col>
                    <Col className="pic_box mt-5 px-4" lg={4} md={6} sm={12}>
                    <img src={pic4} alt="" />
                    <h4 className='text-center mt-5'>Online Store Builder</h4>
                        <p className='text-center mt-4 text-secondary'>Avada is integrated with WooCommerce, allowing you to build successful online stores to sell anything online.</p>
                    </Col>
                    <Col className="pic_box mt-5 px-4" lg={4} md={6} sm={12}>
                    <img src={pic5} alt="" />
                    <h4 className='text-center mt-4'>Built For Performance</h4>
                        <p className='text-center mt-4 text-secondary'>Experience total control of your website’s features that will empower you to make superior performance-related decisions.</p>
                    </Col>
                    <Col className="pic_box mt-5 px-4" lg={4} md={6} sm={12}>
                    <img src={pic6} alt="" />
                    <h4 className='text-center mt-4'>Dynamic Content</h4>
                        <p className='text-center mt-4 text-secondary'>Build unique pages & post layouts for your website by harnessing the power of Avada’s dynamic content functionality.</p>
                    </Col>
                </Row>
            </Container>
     </div>
    </>
  )
}

export default Qadeer