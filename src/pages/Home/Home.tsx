import React, { useEffect } from "react";
import { Carousel, Row, Col, Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import Products from "../../assets/Product";
import Banner from "../../components/Banner/Banner";
import { useAppContext } from "../../context/AppContext";
import ProductsComp from "../../components/Products/ProductsComp";
import BestSellingProducts from "../../components/BestSellingProducts/BestSellingProducts";

// import product1 from '../../assets/Product/product1.webp';
// import product2 from '../../assets/Product/product2.webp';
// import product3 from '../../assets/Product/product3.webp';
// import product4 from '../../assets/Product/product4.webp';
// import product5 from '../../assets/Product/product5.webp';
// import product6 from '../../assets/Product/product6.webp';

const App = () => {
  const { products, getProducts } = useAppContext();

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);
  // const products = [
  //   { id: 1, name: 'Product 1', image: 'product1' },
  //   { id: 2, name: 'Product 2', image: 'product2' },
  //   { id: 3, name: 'Product 3', image: 'product3' },
  //   { id: 4, name: 'Product 4', image: 'product4' },
  // ];

  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

  const customerReviews = [
    { id: 1, name: "John Doe", review: "Great product and fast delivery!" },
    { id: 2, name: "Jane Smith", review: "Amazing quality and service." },
  ];

  // const Banner = () => (
  //   <Carousel>
  //     <Carousel.Item>
  //       <img src={products} className="d-block w-100" alt="Banner 1" />
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img src={products} className="d-block w-100" alt="Banner 2" />
  //     </Carousel.Item>
  //   </Carousel>
  // );

  const CategoryBrowse = () => (
    <div className="my-4">
      <h3>Browse By Category</h3>
      <Row>
        {categories.map((category, index) => (
          <Col md={3} key={index} className="text-center">
            <div className="border p-3">{category}</div>
          </Col>
        ))}
      </Row>
    </div>
  );

  const NewArrival = () => (
    <div className="my-4">
      <h3>New Arrival</h3>
      <Row>
        {products.slice(0, 2).map((product) => (
          <Col md={6} key={product.id} className="mb-3">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const ExploreProducts = () => (
    <div className="my-4">
      <h3>Explore Our Products</h3>
      <Row>
        {products.map((product) => (
          <Col md={3} key={product.id} className="mb-3">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  const WhyUs = () => (
    <div className="my-4 text-center">
      <h3>Why Us</h3>
      <Row>
        <Col md={4}>
          <p>Fast Delivery</p>
        </Col>
        <Col md={4}>
          <p>High Quality Products</p>
        </Col>
        <Col md={4}>
          <p>Excellent Support</p>
        </Col>
      </Row>
    </div>
  );

  const CustomerReviews = () => (
    <div className="my-4">
      <h3>Happy Customers Says</h3>
      <Row>
        {customerReviews.map((review) => (
          <Col md={6} key={review.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <Container style={{ marginTop: "100px" }}>
      <Banner />
      <BestSellingProducts />
      <ProductsComp />
      {/*  <CategoryBrowse />
      <NewArrival />
      <ExploreProducts />
      <WhyUs />
      <CustomerReviews /> */}
    </Container>
  );
};

export default App;
