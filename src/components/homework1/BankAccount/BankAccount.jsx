import styles from './BankAccount.module.css';
import {useState} from "react";

function BankAccount() {
  const [balance, setBalance] = useState(0);
  const [deposit, setDeposit] = useState('');
  const [withdraw, setWithdraw] = useState('');
  const [interests, setInterests] = useState(0);
  const [color, setColor] = useState('');
  const dollarExchangeRate = 44.93;
  const euroExchangeRate = 51.19;

  function creditingFunds() {
    const amount = Number(deposit);

    if (amount <= 0 || isNaN(amount)) {
      alert('Сума зарахування повинна бути більшою за 0');
      return;
    }

    const calculatedInterest = Math.round(amount * 0.03 * 100) / 100;
    const finalAmount = amount - calculatedInterest;

    setInterests(calculatedInterest);
    setBalance(prevBalance => Math.round((prevBalance + finalAmount) * 100) / 100);
    setColor('green');
    setDeposit('');
  }

  function withdrawingFunds() {
    const amount = Number(withdraw);

    if (amount <= 0 || isNaN(amount)) {
      alert("Сума зняття повинна бути більшою за 0");
      return;
    }

    const calculatedInterest = Math.round(amount * 0.03 * 100) / 100;
    const totalDeduction = amount + calculatedInterest;

    if (totalDeduction > balance) {
      alert(`Недостатньо коштів! Для зняття ${amount} грн потрібна комісія ${calculatedInterest} грн (Разом: ${totalDeduction} грн). Ваш баланс: ${balance} грн`);
      return;
    }

    setInterests(calculatedInterest);
    setBalance(prevBalance => Math.round((prevBalance - totalDeduction) * 100) / 100);
    setColor('red');
    setWithdraw('');
  }

  const balanceInDollars = balance / dollarExchangeRate;
  const balanceInEuros = balance / euroExchangeRate;

  return (
    <>
      <div className={styles.bankAccount}>
        <h2 className={styles.accountTitle}>
          Сумма на рахунку:
          <span
            className={styles.accountBalance}
            style={{color: color || 'inherit'}}
          >{balance.toFixed(2)} грн.</span>
        </h2>
        <div className={styles.depositContainer}>
          <p className={styles.depositLabel}>Зарахувати на рахунок:</p>
          <input
            type="number"
            className={styles.depositInput}
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
          <button
            className={styles.depositButton}
            type="button"
            onClick={creditingFunds}
          >
            Зарахувати
          </button>
        </div>
        <div className={styles.withdrawContainer}>
          <p className={styles.withdrawLabel}>Зняти з рахунку:</p>
          <input
            type="number"
            className={styles.withdrawInput}
            value={withdraw}
            onChange={(e) => setWithdraw(e.target.value)}
          />
          <button
            className={styles.withdrawButton}
            type="button"
            onClick={withdrawingFunds}
          >
            Зняти
          </button>
        </div>
        <p className={styles.interestsLabel}>
          Відсотки за обслуговування: <span className={styles.interestsAmount}>{interests.toFixed(2)} грн.</span>
        </p>
      </div>
      <hr />
      <p className={styles.dollarsAmount}>
        Сумма в доларах: <span style={{color: balanceInDollars < 100 ? 'red' : 'green'}}>${balanceInDollars.toFixed(2)}</span>
      </p>
      <p className={styles.eurosAmount}>
        Сумма в євро: <span style={{color: balanceInEuros < 100 ? 'red' : 'green'}}>€{balanceInEuros.toFixed(2)}</span>
      </p>
    </>
  )
}

export default BankAccount;
