import styles from './ShopPage.module.css';
import ProductList from "../../components/ProductList";

function ShopPage() {
  return (
    <div className={styles.shopPage}>
      <ProductList />
    </div>
  )
}

export default ShopPage;
