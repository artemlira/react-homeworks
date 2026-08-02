import styles from './PaymentPage.module.css';

function PaymentPage() {
  return (
    <div className={styles.paymentPage}>
      <p className={styles.text}>При отриманні</p>
      <p className={styles.text}>Переказ на картку</p>
      <p className={styles.text}>Записати у зошит</p>
    </div>
  )
}

export default PaymentPage;
