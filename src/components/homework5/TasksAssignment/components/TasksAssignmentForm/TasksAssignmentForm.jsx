import styles from './TasksAssignmentForm.module.css';
import TasksAssignmentSelector from "../TasksAssignmentSelector";

function TasksAssignmentForm(props) {
  const {tasksList, workersList, onSelect} = props;

  return (
    <div className={styles.tasksAssignmentForm}>
      <h1 className={styles.title}>Розподілювач задач</h1>
      <div className={styles.list}>
        {tasksList.map((task) => (
          <TasksAssignmentSelector
            key={task.id}
            task={task}
            workersList={workersList}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default TasksAssignmentForm;
