import {tasksList, workersList} from "./data/tasks_devider";
import styles
  from "./TasksAssignment.module.css";
import TaskManager from "./components/TaskManager";
//Задача 1. Доробити проєкт з призначеняням задач.
// 1) коли додаємо задачу іншому працівнику, то у попереднього працівника треба забрати
// 2) коли видаляємо задачу, то у формі треба скидувати значення селекта
function TasksAssignment() {
  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Задача 1. Доробити проєкт з призначеняням задач.<br />
          1) коли додаємо задачу іншому працівнику, то у попереднього працівника треба забрати<br />
          2) коли видаляємо задачу, то у формі треба скидувати значення селекта<br />
        </p>
      </div>
      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>
        <TaskManager
          tasksList={tasksList}
          workersList={workersList}
        />
      </div>
    </>
  );
}

export default TasksAssignment;
