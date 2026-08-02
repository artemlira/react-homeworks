import styles from './ProductItem.module.css';

function ProductItem(props) {
  const {productData} = props;
  return (
    <li className={styles.productItem}>
      {productData.name}
    </li>
  )
}

export default ProductItem;
