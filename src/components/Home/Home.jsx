import styles from './Home.module.css';
import {Link} from 'react-router-dom';

function Home() {

  return (
    <div>
      <h1>React Course:</h1>
      <h2>Homeworks Lira Artem</h2>
      <p>Select the homework you want from the list below:</p>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navLink}
              to="/homework1"
            >
              📂 Homework №1
            </Link>
          </li>
          <li>
            <Link
              className={styles.navLink}
              to="/homework2"
            >
              📂 Homework №2
            </Link>
          </li>
          <li>
            <Link
              className={styles.navLink}
              to="/homework3"
            >
              📂 Homework №3
            </Link>
          </li>
          {/*<li>*/}
          {/*  <Link*/}
          {/*    className={styles.navLink}*/}
          {/*    to="/homework4"*/}
          {/*  >*/}
          {/*    📂 Homework №4*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link*/}
          {/*    className={styles.navLink}*/}
          {/*    to="/homework5"*/}
          {/*  >*/}
          {/*    📂 Homework №5*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </div>
  )
}

export default Home;
