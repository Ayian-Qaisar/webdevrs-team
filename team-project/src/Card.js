import React from 'react'
import { CardGroup, Card, Container, Row, Col } from 'react-bootstrap'
import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"

import Button from 'react-bootstrap/Button';
// import {Container} from 'react-bootstrap';
const CardSection = () => {
  return (
    <div>
      <Container>
        <CardGroup className='w-100 gap-5 mt-5 mb-5 '>
          <Row>
            <Col>
              <Card className='bg1 text-center  hvr'>
                <Card.Body>
                  <Card.Title>For Beginners</Card.Title>
                  <h1>Lounch Your First Website</h1>
                  <Card.Img className='w-50' variant="top" src={card1} />
                  <div className='d-flex flex-wrap text-center gap-2 justify-content-center mt-5'>
                    <Button variant="warning">Visual Builder</Button>
                    <Button variant="warning">Docomentation</Button>
                    <Button variant="warning">Support</Button>
                    <Button variant="warning">Prebuilt Websiter</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='bg2 text-center  hvr'>
                <Card.Body>
                  <Card.Title>For Markete</Card.Title>
                  <h1>Generate Leads And Conversision</h1>
                  <Card.Img className='w-50' variant="top" src={card2} />
                  <div className='d-flex flex-wrap text-center gap-2 justify-content-center mt-5'>
                    <Button variant="Success">Design</Button>
                    <Button variant="Success">SEO</Button>
                    <Button variant="Success">Shop Builder</Button>
                    <Button variant="Success">Fram Builderr</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='bg3 text-center hvr'>
                <Card.Body>
                  <Card.Title>For Professionals</Card.Title>
                  <h1>Take Your Projects To The Next Leval</h1>
                  <Card.Img className='w-50' variant="top" src={card3} />
                  <div className='d-flex flex-wrap text-center gap-2 justify-content-center mt-5'>
                    <Button variant="info">All in One</Button>
                    <Button variant="info">Patcher</Button>
                    <Button variant="info">WCAG</Button>
                    <Button variant="info">Dynamic Data</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </div>
  )
}

export default CardSection
