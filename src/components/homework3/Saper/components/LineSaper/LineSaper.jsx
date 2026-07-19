import styles from './LineSaper.module.css';
import {useState} from "react";

// Задача 4. Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано інформацію про наявність міни (використати атрибути).
// Спочатку клітинки сірі. При натисненні на клітинку аналізується чи є там міна і тоді колір стає червоним,
// якщо немає – зеленим. Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.

function LineSaper({gameField}) {
  const [localGameField, setLocalGameField] = useState(() => JSON.parse(JSON.stringify(gameField)));
  const [gameHistory, setGameHistory] = useState([]);

  const getCellClass = (cellObj) => {
    if (cellObj.isOpen) {
      if (cellObj.mine === 1) {
        return styles.dangerCell;
      } else {
        return styles.freeCell;
      }
    } else {
      return styles.closeCell;
    }
  }

  const cellClick = (cellObjId) => {
    // додаємо поточний стан гри (ігрове поле в історію)
    setGameHistory(prevHistory => [
      ...gameHistory, JSON.parse(JSON.stringify((localGameField))),
    ]);

    setLocalGameField(prevGameField =>
      prevGameField.map((cellObj) =>
        cellObj.id === cellObjId ? {...cellObj, isOpen: true} : cellObj,
      ),
    )
  };

  const goBack = () => {
    const prevGameField = gameHistory.at(-1);
    setLocalGameField(prevGameField);
    setGameHistory(prevHistory => prevHistory.slice(0, -1));
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            {
              localGameField.map((cellObj) => (
                <td
                  key={cellObj.id}
                  className={getCellClass(cellObj)}
                  onClick={() => cellClick(cellObj.id)}
                >

                </td>
              ))
            }
          </tr>
        </tbody>
      </table>
      <hr />
      {!!gameHistory.length && <button onClick={goBack}>Go Back</button>}
    </>
  )
}

export default LineSaper;
