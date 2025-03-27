import { initPageHandlers } from "./pageHandlers";

const initializeApp = () => {
  if (!window.location.hash) {
    window.location.replace(`${window.location.pathname}#/`);
    return;
  }
  hashRouter();
};

const hashRouter = () => {
  const hashPath = window.location.hash.slice(1) || "/";
  initPageHandlers(hashPath);
};

window.addEventListener("load", initializeApp);
window.addEventListener("hashchange", hashRouter);
