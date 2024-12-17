import { Carousel } from "react-bootstrap";
import { useAppContext } from "../../context/AppContext";
import product7 from "../../assets/Products/product7.png";
import product8 from "../../assets/Products/product8.png";
import product4 from "../../assets/Products/product4.png";
import product5 from "../../assets/Products/product5.png";

const images = [product7, product8, product4, product5];

export default function Banner() {
  const { products } = useAppContext();
  console.log({ products });

  return (
    <Carousel className="mb-4">
      {images.map((pro) => (
        <Carousel.Item
          key={pro}
          className="overflow-hidden text-center"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        >
          <img
            src={pro}
            className="h-100"
            alt={pro}
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
