import styles from './WorkersSalaryList.module.css';

function WorkersSalaryList() {
  const workerList = [
    {
      id: 111,
      name: 'Іванов',
      salary: 10000,
    },
    {
      id: 222,
      name: 'Петров',
      salary: 20000,
    },
    {
      id: 333,
      name: 'Сидоров',
      salary: 50000,
    }
  ];
  return (
    <div className={styles.workersSalaryList}>
      <h2 className={styles.title}>Список працівників</h2>
      <ul className={styles.workerList}>
        {workerList.map(worker => (
          <li
            key={worker.id}
            className={styles.workerItem}
          >
            {worker.name}: {worker.salary} грн
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkersSalaryList;
