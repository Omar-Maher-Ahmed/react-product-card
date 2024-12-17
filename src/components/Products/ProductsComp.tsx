import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import ProductCard from "./ProductCard";
import { Row, Spinner } from "react-bootstrap";

export default function ProductsComp() {
  const { products, getProducts, loading } = useAppContext();

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);
  
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center w-100 vh-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="my-4">
          <h3 className="mb-2">Explore Our Products</h3>
          <Row>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Row>
        </div>
      )}
    </>
  );
}
