import styles from './CalculatorOptimization.module.css';
import { useState, useMemo } from 'react';
import ResultDisplay from './ResultDisplay';

function CalculatorOptimization() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [counter, setCounter] = useState(0);

  const sum = useMemo(() => {
    console.log('[Calculation] Calculating A + B...');
    return Number(numA) + Number(numB);
  }, [numA, numB]);

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo. <br />
          Створіть компонент-калькулятор з двома полями вводу (A і B) та компонентом ResultDisplay (A + B), обгорнутим у React.memo(). Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не незалежний стан.
        </p>
      </div>

      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>

        <div className={styles.calculatorCard}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Число A:
              <input
                type="number"
                className={styles.input}
                value={numA}
                onChange={(e) => setNumA(e.target.value)}
              />
            </label>

            <label className={styles.label}>
              Число B:
              <input
                type="number"
                className={styles.input}
                value={numB}
                onChange={(e) => setNumB(e.target.value)}
              />
            </label>
          </div>

          <ResultDisplay result={sum} />

          <div className={styles.testArea}>
            <p className={styles.testText}>
              Незалежний лічильник (не впливає на A чи B): <strong>{counter}</strong>
            </p>
            <button
              type="button"
              className={styles.button}
              onClick={() => setCounter((prev) => prev + 1)}
            >
              Збільшити лічильник (+1)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorOptimization;
