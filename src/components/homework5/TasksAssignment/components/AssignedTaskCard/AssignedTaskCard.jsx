import styles from './AssignedTaskCard.module.css';

function AssignedTaskCard(props) {
  const {task, onDelete} = props;
  const onTaskDelete = () => {
    onDelete(task.id);
  };
  return (
    <li className={styles.assignedTaskCard}>
      <p className={styles.title}>{task.title}</p>
      <button
        className={styles.buttons}
        onClick={onTaskDelete}
      >Delete
      </button>
    </li>
  )
}

export default AssignedTaskCard;
