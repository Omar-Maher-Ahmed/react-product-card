import { Link } from "react-router-dom";
import styles from "./NotFound.module.css"; // Import the CSS module

const NotFound = () => {
return (
<div className={styles.container}>
    <h1 className={styles.title}>404 Not Found</h1>
    <p className={styles.message}>
    Your visited page not found. You may go home page.
    </p>
    <Link to="/" className={styles.homeButton}>
    Back to home page
    </Link>
</div>
);
};

export default NotFound;
