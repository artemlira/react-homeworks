import {memo} from 'react';
import styles from './ResultDisplay.module.css';

function ResultDisplay(props) {
  const {result} = props;
  console.log('[Render] ResultDisplay rendered!');

  return (
    <div className={styles.resultBox}>
      <span className={styles.resultLabel}>Результат (A + B):</span>
      <span className={styles.resultValue}>{result}</span>
    </div>
  );
}

export default memo(ResultDisplay);
