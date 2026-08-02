import styles from './WorkerCard.module.css';
import AssignedTaskCard from "../AssignedTaskCard";

function WorkerCard(props) {
  const {worker, workerTaskList, onDelete} = props;
  return (
    <div className={styles.workerCard}>
      <h2 className={styles.title}>Виконавець: {worker.name}</h2>
      <ul className={styles.list}>
        {workerTaskList.map(task => (
          <AssignedTaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default WorkerCard;
