const TOKEN = "token";

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

function remove(key) {
  localStorage.removeItem(key);
}

export function saveToken(token) {
  save(TOKEN, token);
}

export function loadToken() {
  return load(TOKEN);
}

export function removeToken() {
  remove(TOKEN);
}

export function isAuthenticated() {
  return !!loadToken();
}
