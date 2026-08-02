import styles from './Homework7.module.css';
import AppRoutes from "./router/AppRoutes";
import NavBar from "./components/NavBar";

function Homework7() {
  return (
    <div className={styles.homework7}>
      <NavBar />
      <AppRoutes />
    </div>
  )
}

export default Homework7
