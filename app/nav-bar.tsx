"use client";
import NavLink from "./nav-link";
import { useState } from "react";
import styles from "./nav-bar.module.css";

export default function NavBar() {
  const [counter, setCounter] = useState(0);
  return (
    <nav className={styles.nav}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/users">Users</NavLink>
      <div>
        <button onClick={() => setCounter(counter + 10)}>
          Increment: {counter}
        </button>
      </div>
    </nav>
  );
}
