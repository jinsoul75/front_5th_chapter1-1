import { hashRouter } from "./main.hash";

export const initPageHandlers = (path) => {
  if (path === "/login") {
    handleLoginPage();
  } else if (path === "/profile") {
    handleProfilePage();
  }
  handleLogout();
};

const handleLoginPage = () => {
  if (localStorage.getItem("user") !== null) {
    window.location.hash = "/";
    hashRouter();
  } else {
    const form = document.getElementById("login-form");
    if (form) {
      form.addEventListener("submit", handleLoginSubmit);
    }
  }
};

const handleProfilePage = () => {
  if (!(localStorage.getItem("user") !== null)) {
    window.location.hash = "/login";
    hashRouter();
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
  window.location.hash = "/profile";
  hashRouter();
};

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const userData = { username: "testuser", email: "", bio: "" };
  localStorage.setItem("user", JSON.stringify(userData));
  window.location.hash = "/";
  hashRouter();
};

const handleLogoutClick = (e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  window.location.hash = "/login";
  hashRouter();
};
