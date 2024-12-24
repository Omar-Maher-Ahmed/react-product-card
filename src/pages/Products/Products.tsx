import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Image, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  images?: string[];
  colors?: string[];
  sizes?: string[];
  reviews?: number;
  inStock?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name = "Unnamed Product",
  price = 0.0,
  description = "No description available.",
  images = [],
  colors = [],
  sizes = [],
  reviews = 0,
  inStock = false,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors.length > 0 ? colors[0] : '');
  const [selectedSize, setSelectedSize] = useState(sizes.length > 0 ? sizes[0] : '');
  const [quantity, setQuantity] = useState(1);

  return (
    <Container className="my-5">
      <Row>
        {/* Left: Images */}
        <Col md={6}>
          <Image
            src={images.length > 0 ? images[0] : '../../assets/Products'}
            thumbnail
            alt="Product Image"
          />
          <Row className="mt-2">
            {images.map((img, idx) => (
              <Col xs={3} key={idx}>
                <Image src={img} thumbnail alt={`Image ${idx + 1}`} />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right: Product Details */}
        <Col md={6}>
          <Card className="p-3 border-0">
            <h3>{name}</h3>
            <Badge bg={inStock ? 'success' : 'danger'} className="mb-2">
              {inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
            <p>
              ★★★★☆ ({reviews} Reviews)
            </p>
            <h4 className="mb-3">${price.toFixed(2)}</h4>
            <p>{description}</p>

            {/* Color Selection */}
            {colors.length > 0 && (
              <div className="mb-3">
                <strong>Colours: </strong>
                {colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? 'dark' : 'light'}
                    className="me-2"
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  >
                    &nbsp;
                  </Button>
                ))}
              </div>
            )}

            {/* Size Selection */}
            {sizes.length > 0 && (
              <div className="mb-3">
                <strong>Size: </strong>
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'dark' : 'light'}
                    className="me-2"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            )}

            {/* Quantity and Buttons */}
            <div className="d-flex align-items-center mb-3">
              <Form.Control
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ width: '70px', marginRight: '10px' }}
              />
              <Button variant="danger" className="me-2">
                Buy Now
              </Button>
              <Button variant="outline-secondary">❤️</Button>
            </div>

            {/* Delivery Info */}
            <Card>
              <Card.Body>
                <p>🚚 <strong>Free Delivery</strong> <small>Enter your postal code for availability</small></p>
                <p>📤 <strong>Return Delivery</strong> <small>Free 30-day delivery returns</small></p>
              </Card.Body>
            </Card>
          </Card>
        </Col>
        {/* Related Item */}
        <Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCard;
