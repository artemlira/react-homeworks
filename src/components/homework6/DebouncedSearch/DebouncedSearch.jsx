import {useMemo, useState} from 'react';
import styles from './DebouncedSearch.module.css';
import useDebounce from './hooks/useDebounce';

const products = [
  'Ноутбук Lenovo',
  'Ноутбук Asus',
  'Смартфон Samsung',
  'Смартфон iPhone',
  'Планшет iPad',
  'Монітор LG',
  'Клавіатура Logitech',
  'Миша Microsoft',
  'Навушники Sony',
  'Колонка JBL',
];

function DebouncedSearch() {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 500);

  const filteredProducts = useMemo(() => {
    const searchValue = debouncedSearchText.toLowerCase();

    return products.filter((product) => (
      product.toLowerCase().includes(searchValue)
    ));
  }, [debouncedSearchText]);

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Задача 4. useDebounce – відкладений виклик функції<br />
          Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах.
          Він повинен повертати "відкладене" значення, яке оновлюється лише після того,
          як минув заданий час без змін.<br />
          Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу,
          а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.
        </p>
      </div>

      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>

        <div className={styles.searchBox}>
          <label className={styles.label}>
            Пошук товару:
            <input
              className={styles.input}
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Наприклад: ноутбук"
            />
          </label>

          <p className={styles.info}>
            Значення в input: {searchText || 'порожньо'}
          </p>
          <p className={styles.info}>
            Значення після debounce: {debouncedSearchText || 'порожньо'}
          </p>

          <ul className={styles.list}>
            {filteredProducts.map((product) => (
              <li key={product} className={styles.listItem}>
                {product}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default DebouncedSearch;
