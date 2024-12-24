import { IProduct } from "../../util/interfaces";
import { Button, Card, Col } from "react-bootstrap";
import placeholder from "../../assets/placedholder.jpg";
type Props = {
  product: IProduct;
};

export default function ProductCard({ product }: Props) {
  return (
    <Col md={3} key={product.id} className="mb-3">
      <Card className="h-100">
        <Card.Img variant="top" src={product.image || placeholder} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
