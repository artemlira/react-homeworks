import styles from './HomeworkLayout.module.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function HomeworkLayout({title, tasks = []}) {
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);

  const CurrentTaskComponent = tasks[activeTaskIndex] || (() =>
    <div>There are no tasks yet</div>);

  return (
    <div className={styles.container}>
      <Link
        className={styles.backLink}
        to="/"
      >
        Back to the list of all Homeworks
      </Link>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.taskButtons}>
        {tasks.map((_, index) => (
          <button
            className={styles.taskButton}
            key={index}
            onClick={() => setActiveTaskIndex(index)}
            style={{
              backgroundColor: activeTaskIndex === index ? '#007bff' : '#f8f9fa',
              color: activeTaskIndex === index ? '#fff' : '#333'
            }}
          >
            Task {index + 1}
          </button>
        ))}
      </div>

      <div className={styles.taskContent}>
        <CurrentTaskComponent />
      </div>
    </div>
  );
}

export default HomeworkLayout;
