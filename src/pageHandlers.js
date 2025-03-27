import { ErrorPage, LoginPage, MainPage, ProfilePage } from "./pages";
import { getUserData } from "./utils/auth";
import { BASE_PATH } from "./utils/path";

const isHash = window.location.hash !== "";

const render = (path) => {
  let page = "";

  if (path === "/") {
    page = MainPage();
  } else if (path === "/profile") {
    page = ProfilePage({ user: getUserData() });
  } else if (path === "/login") {
    page = LoginPage();
  } else {
    page = ErrorPage();
  }

  document.getElementById("root").innerHTML = page;

  if (path === "/login") {
    handleLoginPage();
  } else if (path === "/profile") {
    handleProfilePage();
  }
  handleLogout();
};

const navigateTo = (isHash, path) => {
  if (isHash) {
    window.location.href = `/index.hash.html#${path}`;
  } else {
    window.history.pushState({}, "", path);
  }
};

export const initPageHandlers = (path) => {
  render(path);
  const isHash = window.location.hash !== "";

  const nav = document.querySelector("#nav");

  if (nav) {
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        e.preventDefault();
        const href = e.target.getAttribute("href");

        navigateTo(isHash, `${BASE_PATH}${href}`);
        render(href);
      }
    });
  }
};

const handleLoginPage = () => {
  if (localStorage.getItem("user") !== null) {
    navigateTo(isHash, "/");
    render("/");
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
    render("/login");
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
  render("/profile");
};

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const userData = { username: "testuser", email: "", bio: "" };
  localStorage.setItem("user", JSON.stringify(userData));
  navigateTo(isHash, "/");
  render("/");
};

const handleLogoutClick = () => {
  localStorage.removeItem("user");
};
