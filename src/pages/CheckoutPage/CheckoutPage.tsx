import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const CheckoutPage = () => {
return (
<Container fluid className="py-5">
    <Row>
    {/* Billing Details Section */}
    <Col md={7}>
        <h2 className="mb-4">Billing Details</h2>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>First Name *</Form.Label>
            <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your company name" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Street Address *</Form.Label>
            <Form.Control type="text" placeholder="Enter your street address" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Apartment, floor, etc. (optional)</Form.Label>
            <Form.Control type="text" placeholder="Enter additional address info" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Town/City *</Form.Label>
            <Form.Control type="text" placeholder="Enter your town or city" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Phone Number *</Form.Label>
            <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>
        <Form.Group className="mb-4">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>
        <Form.Check
            type="checkbox"
            label="Save this information for faster check-out next time"
            className="mb-3"
        />
        </Form>
    </Col>

    {/* Order Summary and Payment Section */}
    <Col md={5}>
        <div className="p-4 border rounded">
        <h4>Order Summary</h4>
        <div className="d-flex justify-content-between mb-2">
            <span>LCD Monitor</span>
            <span>$650</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
            <span>HI Gamepad</span>
            <span>$1100</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-2">
            <span>Subtotal:</span>
            <span>$1750</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
        </div>
        <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Total:</span>
            <span>$1750</span>
        </div>

        <h5 className="mt-4">Payment Options</h5>
        <Form.Check
            type="radio"
            label="Bank"
            name="paymentMethod"
            className="mb-2"
        />
        <Form.Check
            type="radio"
            label="Cash on delivery"
            name="paymentMethod"
            defaultChecked
            className="mb-4"
        />

        <div className="d-flex">
            <Form.Control type="text" placeholder="Coupon Code" className="me-2" />
            <Button variant="danger">Apply Coupon</Button>
        </div>

        <Button variant="danger" className="w-100 mt-4">
            Place Order
        </Button>
        </div>
    </Col>
    </Row>
</Container>
);
};

export default CheckoutPage;
