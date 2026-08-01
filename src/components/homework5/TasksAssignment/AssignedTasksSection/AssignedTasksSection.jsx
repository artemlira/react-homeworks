import styles from './AssignedTasksSection.module.css';
import WorkerCard from "../WorkerCard";

function AssignedTasksSection(props) {
  const {tasksList, workersList, onDelete} = props;
  const data = {};
  const getWorkerById = (workerId) => {
    return workersList.find(worker => worker.id === workerId);
  };

  for (const task of tasksList) {
    if (task.workerId) {
      if (task.workerId in data) {
        data[task.workerId].tasks.push(task);
      } else {
        data[task.workerId] = {
          worker: getWorkerById(task.workerId),
          tasks: [task]
        };
      }
    }
  }

  return (
    <div className={styles.assignedTasksSection}>
      <h2 className={styles.title}>Призначені задачі:</h2>
      <div className={styles.cards}>
        {Object.keys(data).map(workerId => (
          <WorkerCard
            key={workerId}
            worker={data[workerId].worker}
            workerTaskList={data[workerId].tasks}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default AssignedTasksSection;
