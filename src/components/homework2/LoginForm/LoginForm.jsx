import styles from './LoginForm.module.css';
import {useState} from "react";


function LoginForm() {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isCorrectPassword, setIsCorrectPassword] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const passwordVerification = () => {
    if (Number(userPassword) === 111) {
      setIsCorrectPassword(true);
    } else {
      setIsCorrectPassword(false);
    }
    setHasChecked(true);
  };

  const colorMessage = userLogin.toLowerCase() === "ivan" ? "blue" : "red";

  return (
    <>
      <div>
        <h2 className={styles.title}>
          Job condition:
        </h2>
        <p className={styles.description}>
          Задача 1. Вводимо логін і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:<br />
          1) якщо логін = Іван – колір повідомлення про помилку синій<br />
          2) якщо хтось інший, то колір повідомлення червоний<br />
        </p>
      </div>
      <h2 className={styles.title}>
        Solution:
      </h2>
      <div className={styles.userCard}>
        <label className={styles.userCardName}>
          <input
            type="text"
            placeholder="Enter your login"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
          />
        </label>
        <label className={styles.userCardPassword}>
          <input
            type="password"
            placeholder="Enter your password"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
              setHasChecked(false);
            }}
          />
        </label>
        <button
          className={styles.userCardButton}
          onClick={passwordVerification}
        >Go
        </button>
        {isCorrectPassword ? (<img
            className={styles.userCardImage}
            src="https://upload.wikimedia.org/wikipedia/commons/8/85/Smiley.svg"
            alt="smile"
            width="150px"
            height="150px"
            loading="lazy"
          />
        ) : (
          hasChecked &&
          <p style={{color: colorMessage}}>Password is incorrect</p>
        )}
      </div>
    </>
  )

}

export default LoginForm;
