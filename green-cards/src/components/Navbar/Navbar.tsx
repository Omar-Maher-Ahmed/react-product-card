import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../Logo/Logo";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarCom() {
  const [formData, setFormData] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="bg-bod/y-tertiary bg-transparent"
    >
      <Container fluid className="d-flex justify-content-space-between">
        {/* LOGO */}
        <Navbar.Brand className="d-flex align-items-center" href="#home">
          <Logo />
          Green-Carts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* CONTROLLER */}
        <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-space-between">
          <Nav className="mx-auto">
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
          <Nav className="d-flex gap-4 align-items-center">
            <Link to="/src/pages/Wishlist/Wishlist.tsx">
            <i className="text-dark-50 fw-bolder fs-4 bi bi-heart"></i>
            </Link>

            <i className="text-dark-50 fw-bolder fs-4 bi bi-cart2"></i>
            <Link to="/src/pages/Account/Account.tsx">
            <i className="text-dark bi fw-bolder fs-4 bi-person icon-hover"></i>
            </Link>
            <Link className="text-decoration-none text-dark" to="/register">Register</Link>
            <Link className="text-decoration-none text-dark" to="/login">Log in</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

