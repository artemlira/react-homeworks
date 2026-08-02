import styles from './ProductDetail.module.css';
import {useNavigate, useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";

function ProductDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data, error, isLoading} = useFetch(`/api/products/${id}`);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div className={styles.productDetail}>
        <img
          src={data.imageUrl}
          alt={data.name}
          loading="lazy"
          className={styles.image}
        />
        <h3 className={styles.title}>{data.name}</h3>
        <p className={styles.price}>{data.price}</p>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => navigate('/homework7/shop/')}
        >Назад
        </button>
        <button
        className={styles.button}
        onClick={() => navigate('/homework7')}
      >На головну
      </button>
      </div>
    </>
  )
}

export default ProductDetail;
