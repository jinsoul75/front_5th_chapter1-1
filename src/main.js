import { initPageHandlers } from "./pageHandlers";
import { MainPage, ProfilePage, LoginPage, ErrorPage } from "./pages";
import { getUserData } from "./utils/auth";
import { BASE_PATH } from "./utils/path";

export const router = () => {
  const fullPath = window.location.pathname;
  const path = fullPath.replace(BASE_PATH, "") || "/";

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

  initPageHandlers(path);
};

window.addEventListener("load", router);

window.addEventListener("popstate", router);
