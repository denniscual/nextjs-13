import { UserType } from "../../types";

export default async function User({ params }: any) {
  const user = await getUser(params.id);
  return <div>User name: {user.name}</div>;
}

async function getUser(id: number): Promise<UserType> {
  const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
