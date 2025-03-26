import { initPageHandlers } from "./hashPageHandlers";
import { MainPage, ProfilePage, LoginPage, ErrorPage } from "./pages";
import { getUserData } from "./utils/auth";

const initializeApp = () => {
  if (!window.location.hash) {
    window.location.replace(`${window.location.pathname}#/`);
    return;
  }
  hashRouter();
};

export const hashRouter = () => {
  const hashPath = window.location.hash.slice(1) || "/";

  let page = "";

  if (hashPath === "/") {
    page = MainPage();
  } else if (hashPath === "/profile") {
    page = ProfilePage({ user: getUserData() });
  } else if (hashPath === "/login") {
    page = LoginPage();
  } else {
    page = ErrorPage();
  }

  document.getElementById("root").innerHTML = page;

  setupNavEventListeners();

  initPageHandlers(hashPath);
};

const setupNavEventListeners = () => {
  const nav = document.querySelector("#nav");

  if (nav) {
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        e.preventDefault();
        const href = e.target.getAttribute("href");
        window.location.hash = href;
      }
    });
  }
};

window.addEventListener("load", initializeApp);
window.addEventListener("hashchange", hashRouter);
