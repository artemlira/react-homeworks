import styles from './ContactPage.module.css';

function ContactPage() {

  return (
    <div className={styles.contactPage}>
      <h2 className={styles.title}>Нас дуже легко знайти:</h2>
      <ol className={styles.list}>
        <li className={styles.item}>Потягом до Ужгорода</li>
        <li className={styles.item}>Шукаєте бабу Галю (вона дорогу покаже)</li>
      </ol>
      <p className={styles.text}>До Зустрічі!!!</p>
    </div>
  )
}

export default ContactPage;
