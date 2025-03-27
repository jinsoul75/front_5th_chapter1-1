import { ErrorPage, LoginPage, MainPage, ProfilePage } from "./pages";
import { getUserData } from "./utils/auth";
import { BASE_PATH } from "./utils/path";

const isHash = window.location.hash !== "";

export const render = () => {
  const isHash = window.location.hash !== "";

  const path = isHash
    ? window.location.hash.slice(1).replace(BASE_PATH, "")
    : window.location.pathname.replace(BASE_PATH, "");

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
    window.location.hash = path;
  } else {
    window.history.pushState({}, "", `${BASE_PATH}${path}`);
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
  if (localStorage.getItem("user") === null) {
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

const handleLogoutClick = (e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  navigateTo(isHash, "/login");
  render("/login");
};
