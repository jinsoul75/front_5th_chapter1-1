import { router } from "./main";
import { BASE_PATH } from "./utils/path";

const isHash = window.location.hash !== "";

const navigateTo = (isHash, path) => {
  if (isHash) {
    window.location.href = path;
  } else {
    window.history.pushState({}, "", path);
  }
};

export const initPageHandlers = (path) => {
  const nav = document.querySelector("#nav");

  if (nav) {
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        navigateTo(isHash, `${BASE_PATH}${href}`);
        router();
      }
    });
  }

  if (path === "/login") {
    handleLoginPage();
  } else if (path === "/profile") {
    handleProfilePage();
  }
  handleLogout();
};

const handleLoginPage = () => {
  if (localStorage.getItem("user") !== null) {
    navigateTo(isHash, "/");
    router();
  } else {
    const form = document.getElementById("login-form");
    if (form) {
      form.addEventListener("submit", handleLoginSubmit);
    }
  }
};

const handleProfilePage = () => {
  if (!(localStorage.getItem("user") !== null)) {
    navigateTo(isHash, "/login");
    router();
  } else {
    const form = document.getElementById("profile-form");
    if (form) {
      form.addEventListener("submit", handleProfileSubmit);
    }
  }
};

const handleLogout = () => {
  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", handleLogoutClick);
  }
};

const handleProfileSubmit = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value.trim();
  const userData = { username, email, bio };
  localStorage.setItem("user", JSON.stringify(userData));
  navigateTo(isHash, "/profile");
  router();
};

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const userData = { username: "testuser", email: "", bio: "" };
  localStorage.setItem("user", JSON.stringify(userData));
  navigateTo(isHash, "/");
  router();
};

const handleLogoutClick = (e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  navigateTo(isHash, "/login");
  router();
};
