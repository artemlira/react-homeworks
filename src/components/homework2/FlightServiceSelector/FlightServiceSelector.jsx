import styles from './FlightServiceSelector.module.css';
import {useState} from "react";

function FlightServiceSelector() {
  const [classTicket, setClassTicket] = useState('');
  const [hasNewspaper, setHasNewspaper] = useState(false);
  const [hasCognac, setHasCognac] = useState(false);
  const [hasSnacks, setHasSnacks] = useState(false);

  const [hasBeer, setHasBeer] = useState(false);
  const [hasChips, setHasChips] = useState(false);

  const handleClassChange = (e) => {
    setClassTicket(e.target.value);
    setHasNewspaper(false);
    setHasCognac(false);
    setHasSnacks(false);
    setHasBeer(false);
    setHasChips(false);
  };

  let selectingAnImageByClass = '';
  if (classTicket === 'econom') {
    selectingAnImageByClass = 'https://holst-decor.com.ua/files/resized/products/ofice_29.700x800.jpg';
  } else if (classTicket === 'business') {
    selectingAnImageByClass = 'https://st2.depositphotos.com/1736422/7711/i/450/depositphotos_77114731-stock-photo-business-jet-interior.jpg';
  }

  return (
    <>
      <div>
        <h2 className={styles.title}>
          Job condition:
        </h2>
        <p className={styles.description}>
          Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо<br />
          1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают<br />
          2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.<br />
        </p>
      </div>
      <h2 className={styles.title}>
        Solution:
      </h2>
      <div>
        <label className={styles.label}>
        Class
        <select
          className={styles.select}
          value={classTicket}
          onChange={handleClassChange}
        >
          <option
            value=""
            disabled
          >Select aircraft class
          </option>
          <option value="econom">Econom</option>
          <option value="business">Business</option>
        </select>

      </label>
        <div className={styles.flightServiceSelector}>
          {!!selectingAnImageByClass && <img
            className={styles.image}
            src={selectingAnImageByClass}
            alt="Image"
            width="200"
            height="200"
            loading="lazy"
          />}
          {classTicket === 'business' &&
            <div className={styles.flightServiceSelector__checkboxes}>
              <p className={styles.flightServiceSelector__checkboxes__title}>Select additional services</p>
              <label>
                <input
                  type="checkbox"
                  checked={hasNewspaper}
                  onChange={() => setHasNewspaper(!hasNewspaper)}
                />
                Newspaper
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={hasCognac}
                  onChange={() => setHasCognac(!hasCognac)}
                />
                Cognac
              </label>
              {hasCognac && (
                <div className={styles.flightServiceSelector__checkboxes__snacks}>
                  <label>
                    <input
                      type="checkbox"
                      checked={hasSnacks}
                      onChange={(e) => setHasSnacks(e.target.checked)}
                    />
                    Do you want snacks? (Yes/No)
                  </label>
                </div>
              )}
            </div>}
          {classTicket === 'econom' &&
            <div className={styles.flightServiceSelector__checkboxes}>
              <p className={styles.flightServiceSelector__checkboxes__title}>Select additional services</p>
              <label>
                <input
                  type="checkbox"
                  checked={hasBeer}
                  onChange={() => setHasBeer(!hasBeer)}
                />
                Beer
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={hasChips}
                  onChange={() => setHasChips(!hasChips)}
                />
                Chips
              </label>
            </div>}
        </div>
      </div>
    </>
  )
}

export default FlightServiceSelector;
