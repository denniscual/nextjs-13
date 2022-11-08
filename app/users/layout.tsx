import styles from "./layout.module.css";
import { UserType } from "../types";
import Link from "next/link";
import LayoutClient from "./layout-client";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <ul className={styles.ist}>
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            style={{
              marginBottom: "5em",
            }}
          >
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
      <div className={styles.content}>{children}</div>
      <LayoutClient />
    </div>
  );
}

async function getUsers(): Promise<UserType[]> {
  const res = await fetch("https://gorest.co.in/public/v2/users", {
    cache: "no-store",
  });
  return res.json();
}
