import { UserType } from "../../types";
import UserSpecificClient from "./user-specific-client";

export default async function User({ params }: any) {
  const user = await getUser(params.id);
  return (
    <div>
      User name: {user.name}
      <UserSpecificClient />
    </div>
  );
}

async function getUser(id: number): Promise<UserType> {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
