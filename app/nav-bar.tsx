import NavLink from "./nav-link";
import styles from "./nav-bar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <NavLink href="/" prefetch={false}>
        Home
      </NavLink>
      <NavLink href="/users" prefetch={false}>
        Users
      </NavLink>
      <NavLink href="/products" prefetch={false}>
        Products
      </NavLink>
      <NavLink href="/admin" prefetch={false}>
        Admin
      </NavLink>
    </nav>
  );
}
