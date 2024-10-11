import { deletePost } from "../../api/post/delete";
import { displayMessage } from "../../components/shared/displayMessage";

export async function onDeletePost(event) {
  event.preventDefault();

  if (confirm("Are you sure?")) {
    const button = event.target;
    const { id } = button.dataset;

    try {
      await deletePost(id);
      button.removeEventListener("click", onDeletePost);
      button.closest("a.post").remove();
    } catch (error) {
      displayMessage("#message", "error", error.message);
    }
  }
}
