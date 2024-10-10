export function renderPost(container, post) {
  container.innerHTML = "";

  const { title, body } = post;

  const heading = document.createElement("h1");
  heading.innerText = title;
  container.appendChild(heading);

  const bodyEl = document.createElement("p");
  bodyEl.innerText = body;
  container.appendChild(bodyEl);
}
