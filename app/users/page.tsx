import styles from "./page.module.css";
import ClientComponent from "./client-component";

export default async function Users() {
  const users = await getUsers();
  return (
    <>
      <h1>Users</h1>
      <ul className={styles.list}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <ClientComponent />
    </>
  );
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("https://gorest.co.in/public/v2/users", {
    cache: "no-store",
  });
  return res.json();
}

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
