import { router } from "./main";

const initPageHandlers = (path) => {
  if (path === "/login") {
    initLoginPage();
  } else if (path === "/profile") {
    initProfilePage();
  }

  initCommonHandlers();
};

const initLoginPage = () => {
  const isLoggedIn = localStorage.getItem("user") !== null;
  if (isLoggedIn) {
    window.history.pushState({}, "", "/");
    router();
  } else {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", handleLoginSubmit);
    }
  }
};

const initProfilePage = () => {
  const isLoggedIn = localStorage.getItem("user") !== null;
  if (!isLoggedIn) {
    window.history.pushState({}, "", "/login");
    router();
  } else {
    const profileForm = document.getElementById("profile-form");
    if (profileForm) {
      profileForm.addEventListener("submit", handleProfileSubmit);
    }
  }
};

const initCommonHandlers = () => {
  const logoutLink = document.getElementById("logout");
  if (logoutLink) {
    logoutLink.addEventListener("click", handleLogout);
  }
};

const handleProfileSubmit = (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value.trim();

  const updatedUser = {
    username,
    email,
    bio,
  };

  localStorage.setItem("user", JSON.stringify(updatedUser));
  window.history.pushState({}, "", "/profile");
  router();
};

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const mockUser = {
    username: "testuser",
    email: "",
    bio: "",
  };

  localStorage.setItem("user", JSON.stringify(mockUser));

  window.history.pushState({}, "", "/");
  router();
};

const handleLogout = (e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  window.history.pushState({}, "", "/login");
  router();
};

export { initPageHandlers };
