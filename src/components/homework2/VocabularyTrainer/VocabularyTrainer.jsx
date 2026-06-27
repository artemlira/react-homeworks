import styles from './VocabularyTrainer.module.css';
import {useState} from "react";

function VocabularyTrainer() {
  const elements = [
    {
      id: 1,
      image: 'https://www.sundays-company.com/cdn/shop/files/DIN-BC-001-050-0_Field_front_silo.jpg?v=1780941886&width=4000',
      titleEng: 'table',
      titleUkr: 'стіл'
    },
    {
      id: 2,
      image: 'https://img.uline.com/is/image/uline/S-22748BLU?$Mobile_Zoom$',
      titleEng: 'pen',
      titleUkr: 'ручка'
    },
    {
      id: 3,
      image: 'https://cdn-web-main.bibliocms.com/wp-content/uploads/sites/50/2018/11/hero.jpg',
      titleEng: 'book',
      titleUkr: 'книга'
    },
    {
      id: 4,
      image: 'https://www.cnet.com/a/img/resize/bb8a2aa9c31f8ec08d82228a51eabf05f00e54d2/hub/2025/03/10/d190e21d-9634-440d-8f33-396c8cb3da6a/m4-macbook-air-15-11.jpg?auto=webp&height=500',
      titleEng: 'laptop',
      titleUkr: 'ноутбук'
    },
    {
      id: 5,
      image: 'https://www.ks-licht.de/images/product_images/popup_images/STE-3456ZW_1.jpg',
      titleEng: 'lamp',
      titleUkr: 'лампа'
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [status, setStatus] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const currentItem = elements[currentIndex];

  const checkAnswer = () => {
    const trimmedAnswer = userAnswer.trim().toLowerCase();
    const correctAnswer = currentItem.titleUkr.toLowerCase();

    if (!trimmedAnswer) {
      alert('Будь ласка, введіть слово!');
      return;
    }

    if (trimmedAnswer === correctAnswer) {
      setStatus('correct');
      setFeedbackMessage('Добре. Молодець!');
    } else {
      setStatus('error');
      setFeedbackMessage('Невірно, спробуйте ще раз');
    }
  };

  const handleNext = () => {
    if (currentIndex < elements.length - 1) {
      setUserAnswer('');
      setStatus('');
      setFeedbackMessage('');
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
      setUserAnswer('');
      setStatus('');
      setFeedbackMessage('');
    }
  };

  return (
    <div className={styles.vocabularyTrainer}>
      <h2 className={styles.title}>
        Тренажер англійської мови ({currentIndex + 1} / {elements.length})
      </h2>

      <div className={`${styles.card} ${status === 'correct' && styles.card_correct} ${status === 'error' && styles.card_error}`}>
        <div className={styles.imageWrapper}>
          <img
            src={currentItem.image}
            alt={currentItem.titleEng}
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.info}>
          <p className={styles.wordUkr}>
            Перекладіть українською: <strong>{currentItem.titleEng}</strong>
          </p>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Введіть відповідь"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className={styles.input}
            />
            <button
              type="button"
              onClick={checkAnswer}
              className={styles.button}
            >
              Перевірити
            </button>
            {status === 'correct' && (
              <button
                type="button"
                onClick={handleNext}
                className={styles.buttonNext}
              >
                Далі
              </button>
            )}
          </div>

          {feedbackMessage && (
            <p className={`${styles.feedback} ${status === 'correct' ? styles.feedback_correct : styles.feedback_error}`}>
              {feedbackMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default VocabularyTrainer;
