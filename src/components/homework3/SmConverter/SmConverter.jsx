import styles from './SmConverter.module.css';
import {useState} from "react";

// Задача 1. З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.

function SmConverter() {
  const [sm, setSm] = useState('');
  const smValue = parseFloat(sm);
  const isEmpty = sm.trim() === '';
  const isValid = !isEmpty && !Number.isNaN(smValue) && Number.isFinite(smValue) && smValue >= 0;
  const meters = isValid ? smValue / 100 : 0;
  const km = isValid ? meters / 1000 : 0;

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>
          Job condition:
        </h2>
        <p className={styles.description}>
          Задача 1. З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.
        </p>
      </div>
      <div className={styles.solutionWrapper}>
      <h2 className={styles.title}>
        Solution:
      </h2>
      <div className={styles.smConverter}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>
            Sm
            <input
              className={styles.input}
              type="number"
              value={sm}
              onChange={(e) => setSm(e.target.value)}
            />
          </label>

        </div>
        {isEmpty && <div>Введіть значення сантиметрів</div>}
        {!isEmpty && !isValid &&
          <div className={styles.errorMessage}>Введіть коректне значення</div>}
        {isValid && (<div className={styles.resultWrapper}>
          <p>Метрів: {meters}</p>
          <p>Кілометрів: {km}</p>
        </div>)}

      </div>
      </div>
    </>
  )
}

export default SmConverter;
