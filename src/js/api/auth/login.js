import { API_AUTH_LOGIN } from "../constants.js";
import { headers } from "../headers.js";

export async function login({ email, password }) {
  const body = JSON.stringify({ email, password });

  const response = await fetch(`${API_AUTH_LOGIN}`, {
    method: "POST",
    body: body,
    headers: headers(),
  });

  const json = await response.json();

  if (response.ok === false) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
