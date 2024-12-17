import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import product1 from "../../assets/Products/product7.png";
import product2 from "../../assets/Products/product8.png";
import product3 from "../../assets/Products/product3.png";
import product4 from "../../assets/Products/product4.png";
import { IProduct } from "../../util/intaerfaces";



const products: IProduct[] = [
  { id: 1, name: "Product 1", image: product1 , description : "Some Description", price: '5000', stock: 7, category: "Smart", is_available: true},
  { id: 2, name: "Product 2", image: product2 , description : "Some Description", price: '5000', stock: 7, category: "Smart", is_available: true},
  { id: 3, name: "Product 3", image: product3 , description : "Some Description", price: '5000', stock: 7, category: "Smart", is_available: true},
  { id: 4, name: "Product 4", image: product4 , description : "Some Description", price: '5000', stock: 7, category: "Smart", is_available: true},
];
export default function BestSellingProducts() {
  //   const { products } = useAppContext();

  return (
    <div>
      <h3>Best Selling Products</h3>
      <div className="my-4">
        <Row>
          {products
            .filter((pr) => !!pr.image)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Row>
      </div>
    </div>
  );
}
