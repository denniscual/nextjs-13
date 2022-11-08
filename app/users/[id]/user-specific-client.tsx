"use client";

export default function UserSpecificClient() {
  return (
    <div>
      <button onClick={() => console.log("This is user specific client")}>
        User specific client
      </button>
    </div>
  );
}
