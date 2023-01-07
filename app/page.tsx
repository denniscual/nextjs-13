import AppClient from "./app-client";
import memoize from "memoize-one";

const createMessage = memoize((message: string) => `Hello ${message}`);

export default function Home() {
  const message = createMessage("World");
  return (
    <>
      <h1>Home Page</h1>
      {message}
      <AppClient />
    </>
  );
}
