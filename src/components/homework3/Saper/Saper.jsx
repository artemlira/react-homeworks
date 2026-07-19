import LineSaper from "./components/LineSaper";
import styles from "../SmConverter/SmConverter.module.css";
// Задача 4. Однорядковий сапер. Однорядкова таблиця,
// до клітинок якої додано інформацію про наявність міни (використати атрибути).
// Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним,
// якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.

function Saper() {
const gameField = [
  {
    id: 1,
    isOpen: false,
    mine: 1
  },
  {
    id: 2,
    isOpen: false,
    mine: 0
  },
  {
    id: 3,
    isOpen: false,
    mine: 0
  },
  {
    id: 4,
    isOpen: false,
    mine: 1
  },
  {
    id: 5,
    isOpen: false,
    mine: 0
  }
]
  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>
          Job condition:
        </h2>
        <p className={styles.description}>
          Задача 4. Однорядковий сапер.<br/>
          Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути).<br/>
          Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним,<br/>
          якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
        </p>
      </div>
      <div className={styles.solutionWrapper}>
        <LineSaper gameField={gameField}/>
      </div>
    </>
  )
}

export default Saper;
