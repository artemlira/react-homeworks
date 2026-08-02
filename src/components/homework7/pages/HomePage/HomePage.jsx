import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h2 className={styles.title}>Цей магазин належить програмісту на фрілансі.</h2>
      <p className={styles.listTitle}>Тому:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>магазин працює коли хоче;</li>
        <li className={styles.listItem}>товари надсилає швидко;</li>
        <li className={styles.listItem}>на запитання відповідає коли висипається;</li>
      </ul>
    </div>
  )
}

export default HomePage;
