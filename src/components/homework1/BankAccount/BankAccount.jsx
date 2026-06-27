import styles from './BankAccount.module.css';
import {useState} from "react";

function BankAccount() {
  const [balance, setBalance] = useState(0);
  const [deposit, setDeposit] = useState(null);
  const [withdraw, setWithdraw] = useState(null);
  const [interests, setInterests] = useState(null);
  const [dollars, setDollars] = useState(0);
  const [euros, setEuros] = useState(0);



  return (
    <>
      <div className={styles.bankAccount}>
        <h2 className={styles.accountTitle}>
          Сумма на рахунку: <span className={styles.accountBalance}>{balance} грн.</span>
        </h2>
        <div className={styles.depositContainer}>
          <p className={styles.depositLabel}>Зарахувати на рахунок:</p>
          <input
            type="number"
            className={styles.depositInput}
          />
          <button
            className={styles.depositButton}
            type="button"
          >
            Зарахувати
          </button>
        </div>
        <div className={styles.withdrawContainer}>
          <p className={styles.withdrawLabel}>Зняти з рахунку:</p>
          <input
            type="number"
            className={styles.withdrawInput}
          />
          <button
            className={styles.withdrawButton}
            type="button"
          >
            Зняти
          </button>
        </div>
        <p className={styles.interestsLabel}>
          Відсотки за обслуговування: <span className={styles.interestsAmount}>0 грн.</span>
        </p>
      </div>
      <hr />
      <p className={styles.dollarsAmount}>
        Сумма в доларах: <span>$0</span>
      </p>
      <p className={styles.eurosAmount}>
        Сумма в євро: <span>€0</span>
      </p>
    </>
  )
}

export default BankAccount;
