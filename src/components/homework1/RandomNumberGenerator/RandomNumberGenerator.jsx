import styles from './RandomNumberGenerator.module.css';
import {useState} from "react";

function RandomNumberGenerator() {
  const [number, setNumber] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const handleGenerate = () => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(random);
  };
  return (
    <div className={styles.randomNumberGenerator}>
      <input
        className={styles.input}
        type="number"
        value={min}
        onChange={(e) => setMin(Number(e.target.value))}
      />
      <input
        className={styles.input}
        type="number"
        value={max}
        onChange={(e) => setMax(Number(e.target.value))}
      />
      <button
        className={styles.button}
        onClick={handleGenerate}
      >Generate
      </button>
      <p className={styles.number}>{number}</p>
    </div>
  )
}

export default RandomNumberGenerator;
