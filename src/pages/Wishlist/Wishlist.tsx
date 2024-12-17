import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Products, Product } from "../../util/interfaceProduct";

const Wishlist: React.FC = () => {
  return (
    <Container className="mt-4 mb-3">
      <Row className="gy-4 mt-5 mb-5 justify-content-center align-items-center"
        >
        {Products.map((item: Product) => (
          <Col key={item.id} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <strong>{item.category}</strong>
                  <br />
                  <span>Price: ${item.price}</span>
                  <br />
                  {item.originalPrice && item.discount && (
                    <span>
                      <del>${item.originalPrice}</del> <br />
                      <span className="text-danger">
                        {item.discount}% OFF
                      </span>
                    </span>
                  )}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wishlist;
