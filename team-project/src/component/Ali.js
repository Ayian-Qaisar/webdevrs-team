import React from 'react'
import "./Ali.css"
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
export const Ali = () => {
  return (
    <div>
        <div className="box1">
          <div className='textH1'>
            <h1>896,030 Website Owners <br/>Trust Avada</h1>
            <p>The #1 selling Website Builder on Themeforest for 10+ years.</p>
          </div>
          <CardGroup  className='main'>
      <Card className='border-0'>
        <Card className='main-Img border-0'>
        <Card.Img className='img1 ' variant="top" src="https://avada.com/wp-content/uploads/2021/06/world-class-support.png" />
        </Card>
        <Card.Body>
          <Card.Title><h5 className='smallText'>World-Class Support</h5></Card.Title>
          <Card.Text>
            <p className='para'>

          We build long-term professional relationships with our customers that you can rely on & trust.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='border-0'>
        <Card className='main-Img border-0'>
        <Card.Img variant="top" src="https://avada.com/wp-content/uploads/2021/06/documentation.png" />
        </Card>
        <Card.Body>
          <Card.Title><h5 className='smallText'>Documentation & Tutorials</h5></Card.Title>
          <Card.Text>
            <p className='para'>
          Over 550 help files & 200 tutorial videos will make building websites with Avada even easier.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='border-0'>
        <Card className='main-Img1 border-0'>
        <Card.Img variant="top" src="https://avada.com/wp-content/uploads/2021/06/built-in-house.png" />
        </Card>
        <Card.Body>
          <Card.Title><h4 className='smallText'>100% Built In-House</h4></Card.Title>
          <Card.Text>
            <p className='para'>

          Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='border-0'>
        <Card className='main-Img2 border-0'>
        <Card.Img variant="top" src="https://avada.com/wp-content/uploads/2021/06/free-updates.png" />
        </Card>
        <Card.Body>
          <Card.Title><h4 className='smallText'>Free Lifetime Updates</h4></Card.Title>
          <Card.Text>
            <p className='para'>
          Your website will receive free & regular updates, compatible with industry standards & trends, for life.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
        </div>
    </div>
  )
}
