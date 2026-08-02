import {useCallback, useDeferredValue, useMemo, useState} from 'react';
import styles from './DataGrid.module.css';
import GridRow from './components/GridRow';
//Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI
// Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
// DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.
// GridRow (обгорнутий у React.memo) відображає один рядок даних.
// Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.
// Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.
// Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.
// Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.

const names = ['Олена', 'Максим', 'Ірина', 'Василь', 'Софія', 'Дмитро', 'Андрій', 'Олександр', 'Олеся', 'Дарина', 'Олексій', 'Віталій'];
const departments = ['Frontend', 'Backend', 'Design', 'QA', 'HR', 'PM'];

const defaultRows = Array.from({length: 2000}, (_, index) => ({
  id: index + 1,
  name: names[index % names.length],
  department: departments[index % departments.length],
  salary: 20000 + (index % 80) * 500,
}));

function DataGrid(props) {
  const {rows = defaultRows} = props;
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const deferredSearchText = useDeferredValue(searchText);
  const deferredSortBy = useDeferredValue(sortBy);
  const deferredSortDirection = useDeferredValue(sortDirection);

  const preparedRows = useMemo(() => {
    const searchValue = deferredSearchText.toLowerCase();

    const filteredRows = rows.filter((row) => (
      row.name.toLowerCase().includes(searchValue)
      || row.department.toLowerCase().includes(searchValue)
    ));

    filteredRows.sort((rowA, rowB) => {
      const valueA = rowA[deferredSortBy];
      const valueB = rowB[deferredSortBy];

      if (typeof valueA === 'number') {
        return deferredSortDirection === 'asc'
          ? valueA - valueB
          : valueB - valueA;
      }

      return deferredSortDirection === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

    return filteredRows;
  }, [rows, deferredSearchText, deferredSortBy, deferredSortDirection]);

  const handleQueryChange = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  const handleSort = useCallback((newSortBy) => {
    setSortBy(newSortBy);
    setSortDirection((currentDirection) => (
      sortBy === newSortBy && currentDirection === 'asc' ? 'desc' : 'asc'
    ));
  }, [sortBy]);

  const handleSelectEmployee = useCallback((employeeId) => {
    setSelectedEmployeeId((currentEmployeeId) => (
      currentEmployeeId === employeeId ? null : employeeId
    ));
  }, []);

  const selectedEmployee = rows.find((row) => row.id === selectedEmployeeId);

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI<br />
          Створіть компонент DataGrid (батьківський) та GridRow (дочірній).<br />
          DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.<br />
          GridRow (обгорнутий у React.memo) відображає один рядок даних.<br />
          Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.<br />
          Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.<br />
          Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.<br />
          Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.<br />
        </p>
      </div>
      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>
        <div className={styles.dataGrid}>
          <input
            className={styles.input}
            type="text"
            value={searchText}
            onChange={handleQueryChange}
            placeholder="Пошук за ім’ям або відділом"
          />

          <div className={styles.buttons}>
            <button type="button" onClick={() => handleSort('name')}>
              Сортувати за ім’ям
            </button>
            <button type="button" onClick={() => handleSort('department')}>
              Сортувати за відділом
            </button>
            <button type="button" onClick={() => handleSort('salary')}>
              Сортувати за зарплатою
            </button>
          </div>

          <p className={styles.info}>
            Знайдено: {preparedRows.length}. Сортування: {sortBy} ({sortDirection})
          </p>

          {selectedEmployee && (
            <p className={styles.info}>Обрано: {selectedEmployee.name}</p>
          )}

          <div className={styles.gridHeader}>
            <span>ID</span>
            <span>Ім’я</span>
            <span>Відділ</span>
            <span>Зарплата</span>
            <span>Дія</span>
          </div>

          {preparedRows.slice(0, 100).map((row) => (
            <GridRow
              key={row.id}
              row={row}
              isSelected={row.id === selectedEmployeeId}
              onSelect={handleSelectEmployee}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DataGrid;
