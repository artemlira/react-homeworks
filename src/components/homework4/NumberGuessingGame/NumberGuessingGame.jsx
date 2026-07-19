import styles from './NumberGuessingGame.module.css';
import { useState, useEffect } from 'react';
import PlayerPanel from './components/PlayerPanel';

const generateSecretNumber = () => {
  const digits = [];
  while (digits.length < 3) {
    const randomDigit = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }
  return digits;
};

function NumberGuessingGame() {
  const [secretNumber, setSecretNumber] = useState([]);
  const [usedDigits, setUsedDigits] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1Guessed, setPlayer1Guessed] = useState([]);
  const [player2Guessed, setPlayer2Guessed] = useState([]);
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);

  useEffect(() => {
    handleRestart();
  }, []);

  const handleRestart = () => {
    setSecretNumber(generateSecretNumber());
    setUsedDigits([]);
    setCurrentPlayer(1);
    setPlayer1Guessed([]);
    setPlayer2Guessed([]);
    setWinner(null);
    setLoser(null);
  };

  const makeMove = (digit) => {
    if (winner || loser) return;

    const updatedUsed = [...usedDigits, digit];
    setUsedDigits(updatedUsed);

    const isGuessed = secretNumber.includes(digit);

    if (isGuessed) {
      if (currentPlayer === 1) {
        const nextGuessed = [...player1Guessed, digit];
        setPlayer1Guessed(nextGuessed);

        const allGuessedCount = new Set([...nextGuessed, ...player2Guessed]).size;
        if (allGuessedCount === 3) {
          setLoser(1);
          setWinner(2);
          return;
        }
      } else {
        const nextGuessed = [...player2Guessed, digit];
        setPlayer2Guessed(nextGuessed);

        const allGuessedCount = new Set([...player1Guessed, ...nextGuessed]).size;
        if (allGuessedCount === 3) {
          setLoser(2);
          setWinner(1);
          return;
        }
      }
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Задача. Гра “Вгадай число”. Комп'ютер генерує трицифрове число. Кожен гравець по черзі задає цифру, якої ще не було (блокуємо кнопку при повторі). Якщо цифру вгадано, вона відображається. Програє той, хто вгадав останню цифру.
        </p>
      </div>

      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>

        <div className={styles.gameBoard}>
          <div className={styles.numberDisplay}>
            <span className={styles.label}>Число:</span>
            <div className={styles.slots}>
              {secretNumber.map((digit, index) => {
                const isRevealed = usedDigits.includes(digit);
                return (
                  <div
                    key={index}
                    className={`${styles.slot} ${isRevealed ? styles.revealed : styles.hidden}`}
                  >
                    {isRevealed ? digit : ''}
                  </div>
                );
              })}
            </div>
          </div>

          {(winner || loser) && (
            <div className={styles.gameOverBlock}>
              <p className={styles.winnerText}>Гравець {winner} переміг!</p>
              <p className={styles.loserText}>Гравець {loser} програв (вгадав останню цифру)!</p>
              <button onClick={handleRestart} className={styles.restartButton}>
                Зіграти знову
              </button>
            </div>
          )}

          <div className={styles.playersContainer}>
            <PlayerPanel
              playerNumber={1}
              isActive={currentPlayer === 1 && !winner}
              usedDigits={usedDigits}
              guessedDigits={player1Guessed}
              onMove={makeMove}
            />
            <PlayerPanel
              playerNumber={2}
              isActive={currentPlayer === 2 && !winner}
              usedDigits={usedDigits}
              guessedDigits={player2Guessed}
              onMove={makeMove}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NumberGuessingGame;
