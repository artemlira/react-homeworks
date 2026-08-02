import styles from './ProductList.module.css';
import {useFetch} from "../../hooks/useFetch";
import ProductItem from "../ProductItem";
import {Link} from "react-router-dom";

function ProductList() {
  const {isLoading, data, error} = useFetch('/api/products');
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <>
      <h2 className={styles.title}>Список Товарів:</h2>
      <ul className={styles.productList}>
        {data?.map(product => (
          <Link
            className={styles.link}
            key={product.id}
            to={`/homework7/shop/${product.id}`}
          >
            <ProductItem productData={product} />
          </Link>
        ))}
      </ul>
    </>
  )
}

export default ProductList;
