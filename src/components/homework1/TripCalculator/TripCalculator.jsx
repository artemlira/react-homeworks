import styles from './TripCalculator.module.css';
import {useState} from "react";

function TripCalculator() {
  const [passengers, setPassengers] = useState('');
  const handleInputChange = (event) => {
    const value = Number(event.target.value);
    setPassengers(value);
  };

  const busesRequired = Math.ceil(passengers / 20);
  const waterBottlesRequired = passengers * 2;
  const sandwichesRequired = passengers * 3;

  return (
    <div>
      <h2 className={styles.title}>Calculator for the trip</h2>

      <div>
        <label htmlFor="passenger-input">
          Enter the number of passengers:
        </label>
        <input
          id="passenger-input"
          type="number"
          value={passengers}
          onChange={handleInputChange}
        />
      </div>

      <p className={styles.tripCalculatorListTitle}>Required for the trip:</p>
      <ul className={styles.tripCalculatorList}>
        <li className={styles.tripCalculatorListItem}>
          <strong>Buses (20 seats):</strong> {busesRequired}</li>
        <li className={styles.tripCalculatorListItem}>
          <strong>Bottles of water (2 pcs.):</strong> {waterBottlesRequired}
        </li>
        <li className={styles.tripCalculatorListItem}>
          <strong>Sandwiches (3 pcs.):</strong> {sandwichesRequired}</li>
      </ul>
    </div>
  );

}

export default TripCalculator;
