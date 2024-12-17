import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
    <footer style={{ backgroundColor: "#000", color: "#fff", padding: "40px 0" }}>
      <Container>
        <Row className="mb-4">
          <Col md={3} sm={6} xs={12}>
            <h5>Exclusive</h5>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <Form.Group controlId="formEmail" className="d-flex">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              style={{ color: "black" }}
            />
            <Button
              type="submit"
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: 0,
              }}
            >
              &gt;
            </Button>
          </Form.Group>
          </Col>

          <Col md={3} sm={6} xs={12}>
            <h5>Support</h5>
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
            <p>Email: exclusive@gmail.com</p>
            <p>Phone: +88015-88888-9999</p>
          </Col>

          <Col md={2} sm={6} xs={12}>
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>My Account</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Login / Register</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Cart</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Wishlist</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Shop</a></li>
            </ul>
          </Col>

          <Col md={2} sm={6} xs={12}>
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Terms Of Use</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>FAQ</a></li>
              <li><a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </Col>

          <Col md={2} sm={12} xs={12}>
            <h5>Download App</h5>
            <p>Save $3 with App New User Only</p>
            <div className="d-flex mb-3">
              <img
                src="google-play.png"
                alt="Google Play"
                style={{ width: "100px", marginRight: "10px" }}
              />
              <img
                src="app-store.png"
                alt="App Store"
                style={{ width: "100px" }}
              />
            </div>
            <div className="d-flex">
              <a href="#" style={{ color: "#fff", marginRight: "10px" }}>
                <FaFacebookF />
              </a>
              <a href="#" style={{ color: "#fff", marginRight: "10px" }}>
                <FaTwitter />
              </a>
              <a href="#" style={{ color: "#fff", marginRight: "10px" }}>
                <FaInstagram />
              </a>
              <a href="#" style={{ color: "#fff" }}>
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-center mb-0" style={{ borderTop: "1px solid #555", paddingTop: "10px" }}>
              © Copyright Rimel 2022. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};

export default Footer;
