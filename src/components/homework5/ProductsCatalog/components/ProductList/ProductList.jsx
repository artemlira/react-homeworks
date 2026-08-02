import styles from './ProductList.module.css';
import ProductCard from "../ProductCard";

function ProductList(props) {
  const {productsList} = props;

  return (
    <div className={styles.productList}>
      {productsList.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductList;
