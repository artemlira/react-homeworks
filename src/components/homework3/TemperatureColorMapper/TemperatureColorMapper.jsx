import styles from './TemperatureColorMapper.module.css';
import {useId, useState} from "react";

// Задача 2. З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:
//   менше нуля – білий
// від 0 до 10 – синій,
//   від 11 до 22 – зелений
// вище 22 – червоний
// Реалізувати з класами і стилями.


function TemperatureColorMapper() {
  const temperatureId = useId();
  const [temp, setTemp] = useState('');
  const tempValue = parseFloat(temp);
  const isEmpty = temp.trim() === '';
  const isValid = !isEmpty && !Number.isNaN(tempValue) && Number.isFinite(tempValue);

  const getTempData = (value) => {
    if (!isValid) return { className: '', name: '' };

    if (value < 0) {
      return { className: styles.white, name: 'білий' };
    } else if (value >= 0 && value <= 10) {
      return { className: styles.blue, name: 'синій' };
    } else if (value >= 11 && value <= 22) {
      return { className: styles.green, name: 'зелений' };
    } else {
      return { className: styles.red, name: 'червоний' };
    }
  }

  const { className: tempClass, name: colorName } = getTempData(tempValue);

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>
          Job condition:
        </h2>
        <p className={styles.description}>
          Задача 2. З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:<br />
          менше нуля – білий<br />
          від 0 до 10 – синій,<br />
          від 11 до 22 – зелений<br />
          вище 22 – червоний<br />
          Реалізувати з класами і стилями.
        </p>
      </div>
      <div className={styles.solutionWrapper}>
        <div>
          <label
            className={styles.temperatureLabel}
            htmlFor={temperatureId}
          >
            Введіть температуру:
            <input
              className={styles.temperatureInput}
              type="number"
              id={temperatureId}
              value={temp}
              onChange={(event) => setTemp(event.target.value)}
            />
          </label>
        </div>
        {isValid && <div className={styles.result}>
          <p className={styles.resultText}>
            Ви ввели значення температури: {tempValue}
          </p>
          <div className={tempClass}>
            <p>Ваш колір: {colorName}</p>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default TemperatureColorMapper;
