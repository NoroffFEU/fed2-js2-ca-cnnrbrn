import { register } from "../../api/auth/register.js";
import { displayMessage } from "../../components/shared/displayMessage.js";

export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    await register(data);
    displayMessage(
      "#message",
      "success",
      "Registered successfully. <a href='/auth/login'>Login</a> to access your profile."
    );
    form.reset();
  } catch (error) {
    console.log(error);
    // display the error to the user
    // do not use alert()
    displayMessage("#message", "error", error.message);
  }
}
