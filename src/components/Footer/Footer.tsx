import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import QR_GooglePlay from "../../assets/QR_GooglePlay.png";
import GooglePlay from "../../assets/GooglePlay.png";
import playStore from "../../assets/playStore.png";

const Footer: React.FC = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#000", color: "#fff", padding: "40px 0" }}>
        <Container>
          <Row className="mb-4">
            {/* Exclusive Section */}
            <Col md={3} sm={6} xs={12}>
              <h5 style={{ fontWeight: "bold" }}>Exclusive</h5>
              <p style={{ fontWeight: "bold" }}>Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="email-input-container">
                <InputGroup className="email-input-group">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email"
                    className="email-input-field"
                  />
                  <Button variant="outline-light" className="send-button">
                    <span className="send-icon">➤</span>
                  </Button>
                </InputGroup>
              </div>
            </Col>

            {/* Support Section */}
            <Col md={3} sm={6} xs={12}>
              <h5 style={{ fontWeight: "bold" }}>Support</h5>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </Col>

            {/* Account Section */}
            <Col md={2} sm={6} xs={12}>
              <h5 style={{ fontWeight: "bold" }}>Account</h5>
              <ul className="list-unstyled">
                <li><a href="/Account" style={{ color: "#fff", textDecoration: "none" }}>My Account</a></li>
                <li><a href="/Login" style={{ color: "#fff", textDecoration: "none" }}>Login / Register</a></li>
                <li><a href="/Cart" style={{ color: "#fff", textDecoration: "none" }}>Cart</a></li>
                <li><a href="/Wishlist" style={{ color: "#fff", textDecoration: "none" }}>Wishlist</a></li>
                <li><a href="/products" style={{ color: "#fff", textDecoration: "none" }}>Products</a></li>
              </ul>
            </Col>

            {/* Quick Link Section */}
            <Col md={2} sm={6} xs={12}>
              <h5 style={{ fontWeight: "bold" }}>Quick Link</h5>
              <ul className="list-unstyled">
                <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a></li>
                <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Terms Of Use</a></li>
                <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>FAQ</a></li>
                <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
              </ul>
            </Col>

            {/* Download App Section */}
            <Col md={2} sm={12} xs={12}>
              <h5 style={{ fontWeight: "bold" }}>Download App</h5>
              <p>Save $3 with App New User Only</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img 
                  src={QR_GooglePlay}
                  alt="QR Code"
                  style={{ width: "100px", marginBottom: "10px" }}
                  className=" thumbnail "
                  />
                <div>
                  <a href="https://play.google.com/store/games?device=windows" target="_blank"><img
                    src={GooglePlay}
                    alt="Google Play"
                    style={{ width: "40px", marginBottom: "5px" }}
                  />
                  </a>
                  <a href="https://www.apple.com/eg-ar/app-store/" target="_blank">
                  <img
                    src={playStore}
                    alt="App Store"
                    style={{ width: "40px" }}
                  />
                  </a>
                </div>
              </div>
              <div className="d-flex mt-3">
                <a href="#" style={{ color: "#fff", marginRight: "15px" }}>
                  <FaFacebookF />
                </a>
                <a href="#" style={{ color: "#fff", marginRight: "15px" }}>
                  <FaTwitter />
                </a>
                <a href="#" style={{ color: "#fff", marginRight: "15px" }}>
                  <FaInstagram />
                </a>
                <a href="#" style={{ color: "#fff" }}>
                  <FaLinkedinIn />
                </a>
              </div>
            </Col>
          </Row>

          {/* Footer Bottom */}
          <Row>
            <Col>
              <p
                className="text-center mb-0"
                style={{ borderTop: "1px solid #555", paddingTop: "10px" }}
              >
                &#169; Copyright Rimel 2022. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
