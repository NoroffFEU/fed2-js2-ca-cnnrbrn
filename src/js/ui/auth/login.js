import { login } from "../../api/auth/login.js";
import { displayMessage } from "../../components/shared/displayMessage.js";
import { saveToken } from "../../utilities/storage.js";

export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const userData = Object.fromEntries(formData.entries());

  try {
    const { data } = await login(userData);
    saveToken(data.accessToken);
    window.location.href = "/";
  } catch (error) {
    console.log(error);
    displayMessage("#message", "error", error.message);
  }
}
