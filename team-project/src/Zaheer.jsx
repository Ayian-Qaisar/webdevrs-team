import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img1 from "../images/img1.webp";
import Img2 from "../images/img2.webp";
import Img3 from "../images/img3.webp";
import Img4 from "../images/img4.webp";
import Img5 from "../images/img5.webp";
import Img6 from "../images/img6.webp";
import Img7 from "../images/img7.webp";
import Img8 from "../images/img8.webp";

const Zaheer = () => {
  return (
    <>
      <h2 className=" browser_heading text-center mt-5">
        Browse All Bikes at Avone
      </h2>
      <Container className=" mt-3 p-5">
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="main_box">
              <div className="pick_box">
                <img src={Img1} alt="" />
              </div>
              <div className="content_box  shadow ">
                <h4 className="text-center">Road Bikes</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="main_box">
              <div className="pick_box">
                <img src={Img2} alt="" />
              </div>
              <div className="content_box  shadow ">
                <h4 className="text-center">VINTAGE AND CRUISER</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="main_box">
              <div className="pick_box">
                <img src={Img3} alt="" />
              </div>
              <div className="content_box  shadow ">
                <h4 className="text-center">KIDS BIKES</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="main_box">
              <div className="pick_box">
                <img src={Img4} alt="" />
              </div>
              <div className="content_box  shadow ">
                <h4 className="text-center">FAT BIKES</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <div className="main_box">
              <div className="pick_box">
                <img src={Img5} alt="" />
              </div>
              <div className="content_box  shadow ">
                <h4 className="text-center">ELECTRIC BIKES</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <div className="main_box">
              <div className="pick_box">
                <img src={Img6} alt="" />
              </div>
              <div className="content_box  shadow ">
                <h4 className="text-center">MOUNTAIN BIKES</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <div className="main_box">
              <div className="pick_box">
                <img src={Img7} alt="" />
              </div>
              <div className="content_box  shadow ">
                <h4 className="text-center">HYBRID AND CITY BIKES</h4>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <div className="main_box">
              <div className="pick_box">
                <img src={Img8} alt="" />
              </div>
              <div className="content_box  shadow ">
                <h4 className="text-center">BIKES FOR HER</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Zaheer;
