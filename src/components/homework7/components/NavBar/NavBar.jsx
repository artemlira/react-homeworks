import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <nav className={styles.nav}>
        <NavLink
          to="/homework7"
          end
        >Головна</NavLink>
        <NavLink to="/homework7/shop">Магазин</NavLink>
        <NavLink to="/homework7/payment">Правила оплати</NavLink>
        <NavLink to="/homework7/contacts">Контакти</NavLink>
      </nav>
    </div>
  )
}

export default NavBar;
