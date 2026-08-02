import styles from './ProductCard.module.css';

function ProductCard(props) {
  const {product} = props;
  const imageStyle = {
    '--image-position-x': product.imagePosition.x,
    '--image-position-y': product.imagePosition.y
  };

  return (
    <article className={styles.productCard}>
      <div
        className={styles.imageWrapper}
        style={imageStyle}
      >
        <img
          className={styles.image}
          src="./assets/homework5/products-sprite.png"
          alt={product.imageAlt}
        />
      </div>

      <div className={styles.content}>
        <a
          className={styles.name}
          href="#"
          onClick={(event) => event.preventDefault()}
        >
          {product.title}
        </a>
        <p className={styles.bonus}>
          Ваша економія:
          {' '}
          {product.bonus && <span>{product.bonus} ₴</span>}
        </p>
        <p className={styles.oldPrice}>{product.oldPrice} ₴</p>
        <p className={styles.price}>{product.price} ₴</p>
      </div>

      <button
        className={styles.button}
        type="button"
      >
        Купити
      </button>
    </article>
  )
}

export default ProductCard;
