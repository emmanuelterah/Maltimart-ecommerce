import React from 'react'
import './footer.css'
import logo from "../../assets/images/eco-logo.png"
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
                <img src={logo} alt="logo"/>
                <div>
                  <h1>Multimart</h1>
                </div>
            </div>

            <p className="footer__text mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nam iusto odio illum similique quia nemo exercitationem cum, ullam sunt.
            </p>
          </Col>

          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">
                Top Categories
              </h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0"> 
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>


              </ListGroup>
            </div>
          </Col>
          
          <Col lg="2">
            <div className="footer__quick-links">
                <h4 className="quick__links-title">
                  Useful Links
                </h4>
                <ListGroup className="mb-3">
                    <ListGroupItem className="ps-0 border-0">
                      <Link to="/shop">Shop</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0">
                      <Link to="/cart">Cart</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0">
                      <Link to="/">Login</Link>
                    </ListGroupItem>

                    <ListGroupItem className="ps-0 border-0"> 
                      <Link to="#">Privacy Policy</Link>
                    </ListGroupItem>


                </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">
                Contact
              </h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>123 Nairobi, Kenya</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <span><i class="ri-phone-line"></i></span>
                  <p>+0793657987</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <span><i class="ri-mail-line"></i></span>
                  <p>multimart@gmail.com</p>
                </ListGroupItem>


              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
