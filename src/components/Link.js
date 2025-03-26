export const Link = ({ href, children }) => {
  const onclick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
    const popStateEvent = new PopStateEvent("popstate");
    window.dispatchEvent(popStateEvent);
  };

  return `<a href="${href}" onclick="${onclick}">${children}</a>`;
};

export default Link;
