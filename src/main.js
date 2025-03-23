import { initPageHandlers } from "./pageHandlers";
import { MainPage, ProfilePage, LoginPage, ErrorPage } from "./pages";
import { getUserData } from "./utils/auth";
export const router = () => {
  const path = window.location.pathname;

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
