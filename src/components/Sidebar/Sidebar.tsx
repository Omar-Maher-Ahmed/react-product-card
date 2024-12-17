import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";

const Sidebar: React.FC = () => {
const categories = [
"Women's Fashion",
"Men's Fashion",
"Electronics",
"Home & Lifestyle",
"Medicine",
"Sports & Outdoor",
"Baby's & Toys",
"Groceries & Pets",
"Health & Beauty",
];

const slides = [
{
    id: 1,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    image: "../../assets/Products/1.jpeg", // Replace with your image URL
    buttonText: "Shop Now",
},
{
    id: 2,
    title: "Samsung Galaxy S22",
    subtitle: "Exclusive Offers for You",
    image: "../../assets/Products/2.jpeg", // Replace with your image URL
    buttonText: "Explore Deals",
},
{
    id: 3,
    title: "Smart Accessories",
    subtitle: "Up to 50% off Today",
    image: "../../assets/Products/3.jpeg", // Replace with your image URL
    buttonText: "Shop Accessories",
},
];

return (
<div className="d-flex">
    {/* Sidebar */}
    <div
    className="sidebar"
    style={{
        width: "250px",
        height: "100vh", // Full height of the viewport
        position: "relative", // Sticky behavior
        top: "10", // Sticks at the top of the viewport
        backgroundColor: "#d9d9d9",
        borderRight: "1px solid #ddd",
        overflowY: "auto",
        padding: "20px",
    }}
    >
    <ul className="list-unstyled">
        {categories.map((category, index) => (
        <li
            key={index}
            className="d-flex justify-content-between align-items-center py-2 px-3"
            style={{ cursor: "pointer" }}
        >
            {category}
            <BsChevronRight />
        </li>
        ))}
    </ul>
    </div>

    {/* Main Content */}
    <div style={{ marginLeft: "250px", width: "100%" }}>
    <Container fluid className="py-4">
        <Row>
        <Col md={12}>
            <Carousel>
            {slides.map((slide) => (
                <Carousel.Item key={slide.id}>
                <div
                    className="d-flex flex-column justify-content-center align-items-start text-white p-4"
                    style={{
                    height: "300px",
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px",
                    }}
                >
                    <h4>{slide.title}</h4>
                    <h2>{slide.subtitle}</h2>
                    <Button
                    variant="light"
                    className="mt-3"
                    style={{ fontWeight: "bold" }}
                    >
                    {slide.buttonText} →
                    </Button>
                </div>
                </Carousel.Item>
            ))}
            </Carousel>
        </Col>
        </Row>
    </Container>
    </div>
</div>
);
};

export default Sidebar;
