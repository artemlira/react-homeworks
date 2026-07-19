import styles from './SpeedLimitController.module.css';
import {useId, useState} from "react";
//Задача 3. Вводиться дозволена швидкість і поточна швидкість авто. Якщо не введено дозволену швидкість,
// то елемент введення поточної швидкості заблокований.
// Якщо швидкість менше 50% дозволеної, то колір input – оранжевий,
// якщо від 50% до 100% - зелений, вище 100% - червоний.
// Якщо значення вище 90% починає блимати повідомлення «Увага!»
function SpeedLimitController() {
  const [speedAllowed, setSpeedAllowed] = useState('');
  const [currentSpeed, setCurrentSpeed] = useState('');
  const speedAllowedId = useId();
  const currentSpeedId = useId();

  const allowed = parseFloat(speedAllowed);
  const current = parseFloat(currentSpeed);

  const isAllowedValid = speedAllowed.trim() !== '' && !Number.isNaN(allowed) && allowed > 0;
  const isCurrentValid = currentSpeed.trim() !== '' && !Number.isNaN(current);
  const getSpeedMetrics = () => {
    if (!isAllowedValid || !isCurrentValid) {
      return { inputClass: '', showAlert: false };
    }

    const percentage = (current / allowed) * 100;

    let inputClass = '';
    if (percentage < 50) {
      inputClass = styles.orange;
    } else if (percentage >= 50 && percentage <= 100) {
      inputClass = styles.green;
    } else if (percentage > 100) {
      inputClass = styles.red;
    }

    const showAlert = percentage > 90;

    return { inputClass, showAlert };
  };

  const { inputClass, showAlert } = getSpeedMetrics();

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>
          Job condition:
        </h2>
        <p className={styles.description}>
          Задача 3. Вводиться дозволена швидкість і поточна швидкість авто.<br />
          Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований.<br />
          Якщо швидкість менше 50% дозволеної, то колір input – оранжевий,<br />
          якщо від 50% до 100% - зелений, вище 100% - червоний.<br />
          Якщо значення вище 90% починає блимати повідомлення «Увага!»
        </p>
      </div>
      <div className={styles.solutionWrapper}>
        <div className={styles.speedAllowedWrapper}>
          <label htmlFor={speedAllowedId} className={styles.speedLabel}>
            Дозволена швидкість авто:
            <input
              className={styles.speedInput}
              type="number"
              value={speedAllowed}
              id={speedAllowedId}
              onChange={(event) => setSpeedAllowed(event.target.value)}
            />
          </label>
        </div>
        <div className={styles.currentSpeedWrapper}>
          <label htmlFor={currentSpeedId} className={styles.speedLabel}>
            Поточна швидкість авто:
            <input
              className={`${styles.speedInput} ${inputClass}`}
              type="number"
              id={currentSpeedId}
              value={currentSpeed}
              disabled={!isAllowedValid}
              onChange={(event) => setCurrentSpeed(event.target.value)}
            />
          </label>
          {showAlert && (
            <p className={styles.warningMessage}>
              Увага!
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default SpeedLimitController;
