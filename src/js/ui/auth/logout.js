import { removeToken } from "../../utilities/storage.js";

export function onLogout() {
  const logoutButton = document.querySelector("#logout-button");

  if (logoutButton) {
    logoutButton.addEventListener("click", handleLogout);
  }
}

function handleLogout() {
  removeToken();
  window.location.href = "/";
}
