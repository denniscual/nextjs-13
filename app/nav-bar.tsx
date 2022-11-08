import NavLink from "./nav-link";
import styles from "./nav-bar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/users">Users</NavLink>
      <NavLink href="/products">Products</NavLink>
    </nav>
  );
}
