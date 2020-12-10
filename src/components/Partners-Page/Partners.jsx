import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
// import Divider from "../Dividers/Divider"
// import Image from 'react-bootstrap/Image'
import under_c from '../../assets/img/under_c.png';


function Partners() {
  return (
    <div >
      <Navbar />
      <img className="w-50" src={under_c} style={{marginLeft: "20%"}} alt="Webpage under construction" />
      {/* <div className="container">        
        <h2 className="sec-title">Supported Partners</h2>

        <Container className="container">
          <Row>
            <Col xs={6} md={3}>
            <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/2.png')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/6.jpeg')} img-thumbnail />
            </Col>

          </Row>
        </Container>
        <Divider />
        <h2 className="sec-title">Supported Partners</h2>

        <Container className="container">
          <Row>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/6.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>

          </Row>
        </Container>
        <Divider />
        <h2 className="sec-title">Supported Partners</h2>

        <Container className="container">
          <Row>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/6.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>

          </Row>
        </Container>
        <Divider />
        <h2 className="sec-title">Supported Partners</h2>

        <Container className="container">
          <Row>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>
            <Col xs={6} md={3}>
              <img alt="timer" src={require('../../images/1.jpeg')} img-thumbnail />
            </Col>

          </Row>
        </Container>

      </div>
      <br></br> */}
      <Footer />
    </div>
  );
}

export default Partners;


      
