import styles from './ProductsCatalog.module.css';
import ProductList from "./components/ProductList";
import {productsList} from "./data/products";

function ProductsCatalog() {
  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Задача 2. Зверстати список товарів за зразком.
        </p>
      </div>
      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>
        <div className={styles.catalog}>
          <ProductList productsList={productsList} />
        </div>
      </div>
    </>
  );
}

export default ProductsCatalog;
