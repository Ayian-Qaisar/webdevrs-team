import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import '../App.css'
import { useState } from 'react'

import img1 from '../images/footer-builder-5.jpg'
import img2 from '../images/form-builder.jpg'
import img3 from '../images/header-builder-5.jpg'
import img4 from '../images/layout-builder-4.jpg'
import img5 from '../images/live-visual.jpg'
import img6 from '../images/mega-menu-feature.jpg'
import img7 from '../images/off-canvas-feature.jpg'
import img8 from '../images/performance-wizard.jpg'
import img9 from '../images/setup-wizard-1.jpg'



const Sameer = () => {

    let imgArr = [img1,img2,img3,img4,img5,img6,img7,img8,img9]
    let [selectedImg,SetselectedImg] = useState(img1)
    
    let Clicked=(i)=>{
        SetselectedImg( imgArr[i])
}



return (
    <div>
        <Container fluid>

        <Row className='border p-5 '>
        <h1 className='text-center fw-bolder mt-5'>Design Anything, Build Everything</h1>
        <p  className='text-center fw-bold text-secondary  my-5'>Design and launch your website fast & no coding knowledge is required.</p>

        <Col lg={3}  className=' fs-4 p-0 pe-5 '>
        <ul className='list-unstyled  '>
            <li onClick={()=>Clicked(0)} className='hover p-2 mb-2 ps-3'><i class="bi bi-file-binary-fill "></i> Live Visual Builder</li>
            <li onClick={()=>Clicked(1)} className='hover p-2 mb-2 ps-3'><i class="bi bi-grid-1x2-fill"></i> Layout Builder</li>
            <li onClick={()=>Clicked(2)} className='hover p-2 mb-2 ps-3'><i class="bi bi-grid-fill"></i> Header Builder</li>
            <li onClick={()=>Clicked(3)} className='hover p-2 mb-2 ps-3'><i class="bi bi-newspaper"></i> Mega Menu</li>
            <li onClick={()=>Clicked(4)} className='hover p-2 mb-2 ps-3'><i class="bi bi-file-break-fill"></i> Footer Builder</li>
            <li onClick={()=>Clicked(5)} className='hover p-2 mb-2 ps-3'><i class="bi bi-ui-checks"></i> Form Builder</li>
            <li onClick={()=>Clicked(6)} className='hover p-2 mb-2 ps-3'><i class="bi bi-menu-up"></i> Off Canvas</li>
            <li onClick={()=>Clicked(7)} className='hover p-2 mb-2 ps-3'><i class="bi bi-check-square-fill"></i> Setup Wizard</li>
            <li onClick={()=>Clicked(8)} className='hover p-2 mb-2 ps-3'><i class="bi bi-hdd-stack"></i> Perfomance Wizard</li>
        </ul>
        </Col>

        <Col lg={9} className=' fs-4 p-0'>
        <img className='w-100' src={selectedImg}/>
        </Col>


        </Row>



        
        </Container>






    </div>
  )
}

export default Sameer