let count = 0;

const incCartCount = (selector) => {
  const cartCount = document.querySelector(selector);
  cartCount.textContent = ++count;
};

export default incCartCount;
