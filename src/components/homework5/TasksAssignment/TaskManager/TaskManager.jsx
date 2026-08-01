import styles from './TaskManager.module.css';
import TasksAssignmentForm from "../TasksAssignmentForm";
import {useState} from "react";
import AssignedTasksSection from "../AssignedTasksSection";

function TaskManager(props) {
  const {workersList, tasksList} = props;
  const [tasksData, setTasksData] = useState(() => JSON.parse(JSON.stringify(tasksList)));
  const onSelect = (taskId, selectedWorkerId) => {
    setTasksData(prevTasks => prevTasks.map(task => (
      task.id === taskId ? {...task, workerId: selectedWorkerId ? Number(selectedWorkerId) : null} : task
    )));
  };

  const onDelete = (taskId) => {
    setTasksData(prevTasks => prevTasks.map(task => (task.id === taskId ? {
      ...task,
      workerId: null
    } : task)));
  };
  return (
    <div className={styles.taskManager}>
      <TasksAssignmentForm
        workersList={workersList}
        tasksList={tasksData}
        onSelect={onSelect}
      />
      <AssignedTasksSection
        tasksList={tasksData}
        workersList={workersList}
        onDelete={onDelete}
      />
    </div>
  )
}

export default TaskManager;
