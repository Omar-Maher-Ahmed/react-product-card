import React, { useState } from "react";
import { Table, Button, Form, Row, Col, Card } from "react-bootstrap";


interface CartItem {
id: number;
name: string;
price: number;
quantity: number;
image: string;
}

const ShoppingCart: React.FC = () => {
const [cart, setCart] = useState<CartItem[]>([
{ id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "monitor.png" },
{ id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image: "gamepad.png" },
]);

const [coupon, setCoupon] = useState<string>("");
const [discount, setDiscount] = useState<number>(0);

const handleQuantityChange = (id: number, quantity: number) => {
const updatedCart = cart.map((item) =>
    item.id === id ? { ...item, quantity } : item
);
setCart(updatedCart);
};

const handleRemoveItem = (id: number) => {
const updatedCart = cart.filter((item) => item.id !== id);
setCart(updatedCart);
};

const handleApplyCoupon = () => {
if (coupon === "DISCOUNT10") {
    setDiscount(0.1); // 10% خصم
} else {
    alert("Invalid coupon code");
}
};

const calculateSubtotal = () =>
cart.reduce((total, item) => total + item.price * item.quantity, 0);

const total = calculateSubtotal() * (1 - discount);

return (

<div className="container my-5">
    {/* Cart Table */}
    <Table bordered hover className="mb-4">
    <thead>
        <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>
            <div className="d-flex align-items-center">
            <img
                src="https://via.placeholder.com/50"
                alt="LCD Monitor"
                className="me-3"
            />
            LCD Monitor
            </div>
        </td>
        <td>$650</td>
        <td>
            <Form.Select defaultValue="01" onChange={(e) => handleQuantityChange(1, parseInt(e.target.value))}>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            </Form.Select>
        </td>
        <td>$650</td>
        </tr>
        <tr>
        <td>
            <div className="d-flex align-items-center">
            <img
                src="https://via.placeholder.com/50"
                alt="Gamepad"
                className="me-3"
            />
            HI Gamepad
            </div>
        </td>
        <td>$550</td>
        <td>
            <Form.Select defaultValue="02" onChange={(e) => handleQuantityChange(2, parseInt(e.target.value))}>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            </Form.Select>
        </td>
        <td>$1100</td>

        </tr>
        <tr>
        <td>
            <div className="d-flex align-items-center">
            <img
                src="https://via.placeholder.com/50"
                alt="Gamepad"
                className="me-3"
            />
            HI Gamepad
            </div>
        </td>
        <td>$550</td>
        <td>
            <Form.Select defaultValue="02" onChange={(e) => handleQuantityChange(2, parseInt(e.target.value))}>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            </Form.Select>
        </td>
        <td>$1100</td>
        </tr>
    </tbody>
    </Table>

    {/* Action Buttons */}
        <Row className="mb-4">
            <Col>
                <Button variant="outline-secondary">Return To Shop</Button> {/* تعديل الزرار */}
            </Col>
            <Col className="text-end">
                <Button variant="outline-primary">Update Cart</Button> {/* زرار Update Cart شفاف */}
            </Col>
        </Row>

    {/* Coupon Code and Cart Total */}
    <Row>
    <Col md={6}>
        <div className="d-flex">
        <Form.Control
            type="text"
            placeholder="Coupon Code"
            className="me-2"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
        />
        <Button variant="danger" onClick={handleApplyCoupon}>Apply Coupon</Button>
        </div>
    </Col>
    <Col md={6}>
        <Card className="p-3 m-auto border border-black">
        <h5>Cart Total</h5>
        <div className="d-flex justify-content-between">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between">
            <span>Shipping:</span>
            <span>Free</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold">
            <span>Total:</span>
            <span>$1750</span>
        </div>
        <Button variant="danger" className="w-100 mt-3">
            Proceed to Checkout
        </Button>
        </Card>
    </Col>
    </Row>
</div>
);    
};

export default ShoppingCart;
