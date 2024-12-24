import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../Logo/Logo";
import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { useAppContext } from "../../context/AppContext";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";

export default function NavbarCom() {
  // const { user } = useAppContext();

  const [formData, setFormData] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // fixed="top"
      className="bg-bod/y-tertiary bg-transparent p-sticky"
    >
      <Container fluid className="d-flex justify-content-space-between">
        {/* LOGO */}
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <Logo />
          Green-Carts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Container>
        {/* CONTROLLER */}
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-center align-content-between">
          <Nav className="mx-auto ">
            <Form className="position-relative w-fit" onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="I'm searching for..."
                className=" mr-sm-2"
                style={{ minWidth: "350px", width: "100%" }}
                onChange={(e) => setFormData(e.target.value)}
              />
              <Button
                className="bg-dark position-absolute top-0 end-0 fs-6"
                type="submit"
              >
                <i className="bi bi-search"></i>
              </Button>
            </Form>
            </Nav>
          </Navbar.Collapse>
          <Nav className="d-flex gap-4 align-items-center">
            {/* <Nav.Link href="/wishlist"> */}
      <Navbar className="border-bottom mx-4 py-2" expand="lg">
      <Nav className="ms-auto d-flex align-items-center">
        {/* Heart Icon */}
        <Nav.Link href="/wishlist" className="text-secondary hover-dark">
          <FontAwesomeIcon icon={faHeart} />
        </Nav.Link>

        {/* Divider */}
        <div className="border-start mx-2" style={{ height: "20px" }}></div>

        {/* Shopping Cart Icon */}
        <Nav.Link href="/cart" className="text-secondary hover-dark">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Nav.Link>

        {/* Divider */}
        <div className="border-start mx-2" style={{ height: "20px" }}></div>

        {/* User Icon */}
        <Nav.Link href="/profile" className="text-secondary hover-dark">
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>

        {/* Divider */}
        <div className="border-start mx-2" style={{ height: "20px" }}></div>

        {/* Register and Login Links */}
        <Nav.Link href="/register" className="fw-bold text-dark">
          Register
        </Nav.Link>
        <div className="border-start mx-2" style={{ height: "20px" }}></div>
        <Nav.Link href="/login" className="text-dark">
          Log in
        </Nav.Link>
      </Nav>
    </Navbar>
    </Nav>
  </Navbar>
  );
}
