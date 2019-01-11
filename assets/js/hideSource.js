// Get the current path.
path = location.pathname; // window.location.pathname;
window.history.pushState(null, null, path + "/site")