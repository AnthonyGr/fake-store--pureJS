const spinner = (selector) => {
  const preloader = document.querySelector(selector);
  preloader.classList.add("loaded");
};

export default spinner;
