import {useState} from "react";
import styles from './SeasonalStyle.module.css';

function SeasonalStyle() {
  const [month, setMonth] = useState(1);

  const handleInputChange = (event) => {
    const value = Number(event.target.value) || 1;

    if (value >= 1 && value <= 12) {
      setMonth(value);
    }
  };

  const getSeasonData = (monthNumber) => {
    if ([12, 1, 2].includes(monthNumber)) {
      return {
        seasonName: 'Winter',
        clothing: 'Warm clothes, jacket, hat and scarf',
        imageUrl: './assets/winter.webp',
        imageAlt: 'Winter forest with snow'
      };
    } else if ([3, 4, 5].includes(monthNumber)) {
      return {
        seasonName: 'Spring',
        clothing: 'Light jacket, hoodie or windbreaker',
        imageUrl: './assets/spring.jpg',
        imageAlt: 'Waking Spring Forest'
      };
    } else if ([6, 7, 8].includes(monthNumber)) {
      return {
        seasonName: 'Summer',
        clothing: 'T-shirt, shorts, cap and sunglasses',
        imageUrl: './assets/summer.jpg',
        imageAlt: 'Green Line Forest'
      };
    } else {
      return {
        seasonName: 'Fall',
        clothing: 'Raincoat, sweater, umbrella and boots',
        imageUrl: './assets/fall.jpeg',
        imageAlt: 'Yellow Autumn Forest'
      };
    }
  };

  const season = getSeasonData(month);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recommendations by season</h2>

      <div className={styles.inputContainer}>
        <label
          className={styles.label}
          htmlFor="month-input"
        >
          Enter the month number (1-12):
        </label>
        <input
          className={styles.input}
          id="month-input"
          type="number"
          min="1"
          max="12"
          value={month}
          onChange={handleInputChange}
        />
      </div>

      <hr />

      <div className={styles.seasonRecommendation}>
        <p className={styles.seasonName}><strong>Time of year:</strong> {season.seasonName}</p>
        <p className={styles.clothing}><strong>Recommended clothing:</strong> {season.clothing}</p>

        <div className={styles.viewOfForestContainer}>
          <p className={styles.viewOfForest}><strong>View of the forest:</strong></p>
          <img
            className={styles.image}
            src={season.imageUrl}
            alt={season.imageAlt}
          />
        </div>
      </div>
    </div>
  );

}

export default SeasonalStyle;
