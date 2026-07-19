import styles from './AthletesTransferList.module.css';
import {useState} from 'react';
//Задача 5. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні.
// При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.
// При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
// При натисканні на червону стрілку спортсмен переміщається у загальний список.
function AthletesTransferList() {
  const [athletes, setAthletes] = useState([
    {id: 1, name: 'John Depp', isSelected: false},
    {id: 2, name: 'Sara Wik', isSelected: false},
    {id: 3, name: 'Den Miro', isSelected: false},
    {id: 4, name: 'Alan Woo', isSelected: false},
    {id: 5, name: 'Olga Sich', isSelected: true},
    {id: 6, name: 'Ivan Hal', isSelected: true},
  ]);

  const toggleAthleteSelection = (id) => {
    setAthletes((prevAthletes) =>
      prevAthletes.map((athlete) =>
        athlete.id === id ? {
          ...athlete,
          isSelected: !athlete.isSelected
        } : athlete
      )
    );
  };

  const generalList = athletes.filter((athlete) => !athlete.isSelected);
  const selectedList = athletes.filter((athlete) => athlete.isSelected);

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Задача 5. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні.<br />
          При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.<br />
          При натисканні на зелену стрілку спортсмен переміщається у список для змагань.<br />
          При натисканні на червону стрілку спортсмен переміщається у загальний список.<br />
        </p>
      </div>

      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>

        <div className={styles.transferListContainer}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Загальний список</h3>
            <div className={styles.list}>
              {generalList.length > 0 ? (
                generalList.map((athlete) => (
                  <div
                    key={athlete.id}
                    className={styles.card}
                  >
                    <span className={styles.name}>{athlete.name}</span>
                    <button
                      type="button"
                      className={`${styles.arrowButton} ${styles.greenArrow}`}
                      onClick={() => toggleAthleteSelection(athlete.id)}
                      aria-label="Додати до змагань"
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 12L14 5V9H3.8C3.51997 9 3.37996 9 3.273 9.0545C3.17892 9.10243 3.10243 9.17892 3.0545 9.273C3 9.37996 3 9.51997 3 9.8V14.2C3 14.48 3 14.62 3.0545 14.727C3.10243 14.8211 3.17892 14.8976 3.273 14.9455C3.37996 15 3.51997 15 3.8 15H14V19L21 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <p className={styles.emptyText}>Усі спортсмени обрані</p>
              )}
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Обрані для змагання</h3>
            <div className={styles.list}>
              {selectedList.length > 0 ? (
                selectedList.map((athlete) => (
                  <div
                    key={athlete.id}
                    className={styles.card}
                  >
                    <span className={styles.name}>{athlete.name}</span>
                    <button
                      type="button"
                      className={`${styles.arrowButton} ${styles.redArrow}`}
                      onClick={() => toggleAthleteSelection(athlete.id)}
                      aria-label="Повернути в загальний список"
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12L10 5V9H20.2C20.48 9 20.62 9 20.727 9.0545C20.8211 9.10243 20.8976 9.17892 20.9455 9.273C21 9.37996 21 9.51997 21 9.8V14.2C21 14.48 21 14.62 20.9455 14.727C20.8976 14.8211 20.8211 14.8976 20.727 14.9455C20.62 15 20.48 15 20.2 15H10V19L3 12Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                ))
              ) : (
                <p className={styles.emptyText}>Немає обраних спортсменів</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AthletesTransferList;
