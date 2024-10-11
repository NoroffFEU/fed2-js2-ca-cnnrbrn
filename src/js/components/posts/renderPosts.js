import { renderAdminButtons } from "./renderAdminButtons";

export function renderPosts(container, posts) {
  if (posts.length === 0) {
    container.innerHTML = `<div class="message">No posts yet</div>`;
    return;
  }

  container.innerHTML = "";

  const postsHtml = posts.map((post) => createPostHTML(post));
  console.log(postsHtml);
  container.append(...postsHtml);
}

function createPostHTML(post) {
  const { id, title } = post;

  const item = document.createElement("a");
  item.classList.add("post");
  item.href = `/post/?id=${id}`;

  const titleEl = document.createElement("h3");
  titleEl.innerText = title;

  item.appendChild(titleEl);

  const adminButtons = renderAdminButtons(post);

  if (adminButtons) {
    item.appendChild(adminButtons);
  }

  return item;
}
