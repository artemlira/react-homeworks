import styles from './UserAuthenticator.module.css';
import {useState} from "react";

function UserAuthenticator() {
  const users = [
    {id: 1, name: 'Ivan Ivanov', password: '123456'},
    {id: 2, name: 'Ivan Petrov', password: '567890'},
    {id: 3, name: 'Ivan Sidorov', password: '123765'},
    {id: 4, name: 'Ivan Volkov', password: '654321'},
  ];

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  function checkUser(login, password) {
    const user = users.find((user) => user.name === login && user.password === password);
    if (user) {
      setMessage(`Welcome, ${user.name}!`);
      setColor('green');
      setLogin('');
      setPassword('');
    } else {
      setMessage('Invalid login or password');
      setColor('red');
      setLogin('');
      setPassword('');
    }
  }

  return (
    <div className={styles.userAuthenticator}>
      <label className={styles.label}>
        Login:
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Password:
        <input
          className={styles.input}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        className={styles.button}
        type="button"
        onClick={() => checkUser(login, password)}
      >Go
      </button>
      <p
        className={styles.message}
        style={{color: color || 'inherit'}}
      >{message}</p>
    </div>
  )
}

export default UserAuthenticator;
