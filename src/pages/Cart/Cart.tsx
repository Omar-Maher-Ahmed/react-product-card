import React, { useState } from "react";
import { Table, Button, Form, Container, Row, Col } from "react-bootstrap";


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
<Container className="mt-4 mb-3">
    <Row className="gy-4 mt-5 mb-5 justify-content-center align-items-center">
    <Col md={8} className="">
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item) => (
            <tr key={item.id}>
                <td>
                <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "50px", marginRight: "10px" }}
                />
                {item.name}
                </td>
                <td>${item.price}</td>
                <td>
                <Form.Control
                    as="select"
                    value={item.quantity}
                    onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                >
                    {[...Array(10).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                    ))}
                </Form.Control>
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(item.id)}
                >
                    Remove
                </Button>
                </td>
            </tr>
            ))}
        </tbody>
        </Table>
        <Button variant="secondary">Return to Shop</Button>
    </Col>
    <Col md={4}>
        <div className="border p-3 mt-4">
        <h5>Cart Total</h5>
        <p>Subtotal: ${calculateSubtotal()}</p>
        <p>Discount: {discount * 100}%</p>
        <p>Total: ${total.toFixed(2)}</p>
        <Button variant="success" className="d-block ">
            Proceed to Checkout
        </Button>
        </div>
        <Form className="mt-3">
        <Form.Group controlId="coupon">
            <Form.Control
            type="text"
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" onClick={handleApplyCoupon}>
            Apply Coupon
        </Button>
        </Form>
    </Col>
    </Row>
</Container>
);
};

export default ShoppingCart;
