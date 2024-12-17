import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../Products/Products";

const products = [
  {
    image: "https://via.placeholder.com/150",
    title: "Gucci duffle bag",
    category: "Clothes",
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
  },
  {
    image: "https://via.placeholder.com/150",
    title: "RGB Liquid CPU Cooler",
    category: "Headphones",
    price: 1960,
    rating: 4.2,
  },
  {
    image: "https://via.placeholder.com/150",
    title: "GP1 Shooter USB Gamepad",
    category: "Gaming",
    price: 550,
    rating: 4.3,
  },
  {
    image: "https://via.placeholder.com/150",
    title: "Quilted Satin Jacket",
    category: "Clothes",
    price: 750,
    rating: 4.7,
  },
  // Add more products as needed
];

const Products: React.FC = () => {
    // const { handleLogIn, loading, errorMSG, user } = useAppContext();

    useEffect(() => {

    }, [])
  return (
    <Container>
      <Row className="gy-4">
        {products.map((product, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Products {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
