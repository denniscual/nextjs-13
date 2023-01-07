"use client";

import NavLink from "./nav-link";
import styles from "./nav-bar.module.css";
import { useState } from "react";

export default function NavBar() {
  const [counter, setCounter] = useState(0);

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

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
    </nav>
  );
}
