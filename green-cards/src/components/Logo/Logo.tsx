import logo from "../../assets/logo.png";
import Image from "react-bootstrap/Image";
import styles from './logo.module.css';

export default function Logo() {
  return (
    <div>
      <Image src={logo} fluid={true} className={styles.logo} alt="green-Carts" />
    </div>
  );
}
