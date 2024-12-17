import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

interface Product {
image: string;
title: string;
category: string;
price: number;
originalPrice?: number;
discount?: number;
}

const Product: React.FC<Product> = ({
image,
title,
category,
price,
originalPrice,
discount,
}) => {
return (
<Card className="h-100">
    <div className="position-relative">
    <Card.Img variant="top" src={image} alt={title} />
    {discount && (
        <Badge
        bg="danger"
        className="position-absolute top-0 start-0 m-2"
        >{`-${discount}%`}</Badge>
    )}
    </div>
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text className="text-muted">{category}</Card.Text>
    <Card.Text>
        <strong className="text-danger">${price}</strong>{" "}
        {originalPrice && (
        <del className="text-muted">${originalPrice}</del>
        )}
    </Card.Text>
    <Button variant="dark" className="w-100">
        Add to Cart
    </Button>
    </Card.Body>
</Card>
);
};

export default Product;
