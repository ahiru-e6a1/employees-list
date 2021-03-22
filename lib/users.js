import fetch from "node-fetch";
const apiUrl = "https://jsonplaceholder.typicode.com/users";

export async function getAllUsersData() {
  const res = await fetch(new URL(apiUrl));
  const users = await res.json();
  return users;
}
