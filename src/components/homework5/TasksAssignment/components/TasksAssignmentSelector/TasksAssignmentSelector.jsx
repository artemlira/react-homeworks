import styles from './TasksAssignmentSelector.module.css';
import {useId} from "react";

function TasksAssignmentSelector(props) {
  const {task, workersList, onSelect} = props;
  const workerSelectId = useId();
  const onWorkerSelect = (e) => {
    const workerId = e.target.value;
    onSelect(task.id, workerId);
  };
  return (
    <div className={styles.tasksAssignmentSelector}>
      <label htmlFor={workerSelectId}>
        {task.title}
        <select
          className={styles.select}
          name="workers"
          id={workerSelectId}
          value={task.workerId ?? ''}
          onChange={onWorkerSelect}
        >
          <option value="">Виберіть виконавця</option>
          {workersList.map(worker => (
            <option
              key={worker.id}
              value={worker.id}
            >{worker.name}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default TasksAssignmentSelector;
