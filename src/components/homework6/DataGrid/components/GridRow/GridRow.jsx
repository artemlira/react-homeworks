import styles from './GridRow.module.css';
import {memo} from 'react';

function GridRow(props) {
  const {row, isSelected, onSelect} = props;

  return (
    <div className={`${styles.gridRow} ${isSelected ? styles.selectedRow : ''}`}>
      <span className={styles.cell}>{row.id}</span>
      <span className={styles.cell}>{row.name}</span>
      <span className={styles.cell}>{row.department}</span>
      <span className={styles.cell}>{row.salary.toLocaleString('uk-UA')} грн</span>
      <button
        type="button"
        className={styles.rowButton}
        onClick={() => onSelect(row.id)}
      >
        {isSelected ? 'Обрано' : 'Обрати'}
      </button>
    </div>
  )
}

export default memo(GridRow);
