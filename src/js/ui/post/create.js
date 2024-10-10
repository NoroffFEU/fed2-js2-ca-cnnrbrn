import { createPost } from "../../api/post/create.js";
import { displayMessage } from "../../components/shared/displayMessage.js";

export async function onCreatePost(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    await createPost(data);
    displayMessage("#message", "success", "Post created successfully.");
    form.reset();
  } catch (error) {
    console.log(error);
    displayMessage("#message", "error", error.message);
  }
}
