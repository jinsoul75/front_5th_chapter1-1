import { initPageHandlers } from "./pageHandlers";

import { BASE_PATH } from "./utils/path";

export const router = () => {
  const fullPath = window.location.pathname;
  const path = fullPath.replace(BASE_PATH, "") || "/";

  initPageHandlers(path);
};

window.addEventListener("load", router);
window.addEventListener("popstate", router);
