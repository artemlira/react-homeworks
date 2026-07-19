import styles from './PlayerPanel.module.css';
import { useState } from 'react';

function PlayerPanel({ playerNumber, isActive, usedDigits, guessedDigits, onMove }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    if (val === '' || (/^[0-9]$/.test(val))) {
      setInputValue(val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    onMove(inputValue);
    setInputValue('');
  };

  const isAlreadyUsed = usedDigits.includes(inputValue);
  const isButtonDisabled = !isActive || !inputValue || isAlreadyUsed;

  return (
    <div className={`${styles.playerPanel} ${isActive ? styles.active : styles.disabled}`}>
      <h3 className={styles.playerTitle}>Гравець {playerNumber}</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Цифра:
          <input
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={handleChange}
            disabled={!isActive}
            maxLength={1}
            placeholder="0-9"
          />
        </label>

        <button
          type="submit"
          className={styles.button}
          disabled={isButtonDisabled}
        >
          Зробити хід
        </button>
      </form>

      {inputValue && isAlreadyUsed && (
        <p className={styles.warning}>Цю цифру вже вводили!</p>
      )}

      <div className={styles.guessedBlock}>
        <span>Вгадані цифри: </span>
        <strong>{guessedDigits.length > 0 ? guessedDigits.join(', ') : '—'}</strong>
      </div>
    </div>
  );
}

export default PlayerPanel;
