import styles from "./layout.module.css";
import { UserType } from "../types";
import Link from "next/link";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

async function getUsers(): Promise<UserType[]> {
  console.log("GET USERS");
  const res = await fetch("https://gorest.co.in/public/v2/users", {
    cache: "no-store",
  });
  return res.json();
}
