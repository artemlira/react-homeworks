import styles from './KitchenKanbanBoard.module.css';
import {useState} from "react";

function KitchenKanbanBoard() {
  const [waitingList, setWaitingList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [readyList, setReadyList] = useState([]);
  const [newOrder, setNewOrder] = useState('');

  const handleAddNewOrder = () => {
    setWaitingList([...waitingList, newOrder]);
    setNewOrder('');
  };

  const handleCooking = (order) => {
    setInProgressList([...inProgressList, order]);
    setWaitingList(waitingList.filter(item => item !== order));
  };

  const handleReady = (order) => {
    setReadyList([...readyList, order]);
    setInProgressList(inProgressList.filter(item => item !== order));
  };

  const handleCompleted = (order) => {
    setReadyList(readyList.filter(item => item !== order));
  };

  return (
    <>
      <div>
        <h2 className={styles.title}>
          Job condition:
        </h2>
        <p className={styles.description}>
          Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”, якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці
        </p>
      </div>
      <h2 className={styles.title}>
        Solution:
      </h2>
      <div className={styles.kitchenKanbanBoard}>
        <div className={styles.newOrderForm}>
          <label className={styles.newOrderFormLabel}>
            Нова замовлена страва:
            <input
              className={styles.newOrderFormInput}
              type="text"
              value={newOrder}
              onChange={(e) => setNewOrder(e.target.value)}
            />
          </label>
          <button
            className={styles.newOrderFormButton}
            type="button"
            onClick={handleAddNewOrder}
          >Додати
          </button>
        </div>

        <div className={styles.boardGrid}>
          <div className={styles.waitingListContainer}>
            <h3 className={styles.waitingTitle}>Очікують на виконання</h3>
            <ul className={styles.waitingList}>
              {waitingList.map((order, index) => (
                <li
                  className={styles.waitingListItem}
                  key={index}
                >{order}
                  <button
                    className={styles.boardButton}
                    type="button"
                    onClick={() => handleCooking(order)}
                  >Готувати
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.cookingListContainer}>
            <h3 className={styles.cookingTitle}>Виконуються</h3>
            <ul className={styles.cookingList}>
              {
                inProgressList.map((order, index) => (
                  <li
                    className={styles.cookingListItem}
                    key={index}
                  >{order}
                    <button
                      className={styles.boardButton}
                      type="button"
                      onClick={() => handleReady(order)}
                    >Приготовлено
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={styles.cookedListContainer}>
            <h3 className={styles.cookedTitle}>Готові до виносу</h3>
            <ul className={styles.cookedList}>
              {
                readyList.map((order, index) => (
                  <li
                    className={styles.cookedListItem}
                    key={index}
                  >{order}
                    <button
                      className={styles.boardButton}
                      type="button"
                      onClick={() => handleCompleted(order)}
                    >Продано
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default KitchenKanbanBoard;
