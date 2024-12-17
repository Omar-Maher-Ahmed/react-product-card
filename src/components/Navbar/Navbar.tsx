import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../Logo/Logo";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
export default function NavbarCom() {
  const { user } = useAppContext();

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
            <OverlayTrigger
              overlay={
                <Tooltip
                  className="text-dark-50 opacity-100 bg-transparent"
                  id={"products"}
                >
                  Products
                </Tooltip>
              }
            >
              <Tooltip
                id="products"
                className="text-dark-50 opacity-100 bg-transparent"
              >
                <Link className="text-dark-50" to="/products">
                  <i className="bi bi-basket text-dark-50 fw-bolder fs-4"></i>
                </Link>
              </Tooltip>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip
                  className="text-dark-50 opacity-100 bg-transparent"
                  id={"wishlist"}
                >
                  Wishlist
                </Tooltip>
              }
            >
              <Tooltip
                id="wishlist"
                className="text-dark-50 opacity-100 bg-transparent"
              >
                <Link to="/wishlist">
                  <i className="text-dark-50 fw-bolder fs-4 bi bi-heart"></i>
                </Link>
              </Tooltip>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip
                  className="text-dark-50 opacity-100 bg-transparent"
                  id={"cart"}
                >
                  Cart
                </Tooltip>
              }
            >
              <Tooltip
                id="cart"
                className="text-dark-50 opacity-100 bg-transparent"
              >
                <Link to="/cart">
                  <i className="text-dark-50 fw-bolder fs-4 bi bi-cart2"></i>
                </Link>
              </Tooltip>
            </OverlayTrigger>

            {user ? (
              <>
                <OverlayTrigger
                  containerPadding={1}
                  overlay={
                    <Tooltip
                      placement="bottom"
                      className="text-dark-50 opacity-100 bg-transparent"
                      id={"Account"}
                    >
                      <strong>Account</strong>
                    </Tooltip>
                  }
                >
                  <Tooltip
                    id="Account"
                    className="text-dark-50 opacity-100 bg-transparent"
                  >
                    <Link to="/Account">
                      <i className="text-dark bi fw-bolder fs-4 bi-person icon-hover"></i>
                      {user.username || user.first_name}
                    </Link>
                  </Tooltip>
                </OverlayTrigger>
              </>
            ) : (
              <>
                <Link className="text-decoration-none text-dark" to="/register">
                  Register
                </Link>
                <Link className="text-decoration-none text-dark" to="/login">
                  Log in
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
