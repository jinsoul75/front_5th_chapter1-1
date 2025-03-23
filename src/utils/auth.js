export const isLoggedIn = () => localStorage.getItem("user") !== null;
export const getUserData = () =>
  JSON.parse(localStorage.getItem("user") || "null");
export const logout = () => localStorage.removeItem("user");
