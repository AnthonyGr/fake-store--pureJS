const CART = {};
let count = 0;

const incCartCount = (selector) => {
  const cartCount = document.querySelector(selector);
  cartCount.textContent = ++count;
};

//ADD ITEM TO CART
const addToCart = (id, title, price) => {
  if (CART[id]) {
    CART[id].count++;
  } else {
    CART[id] = { name: title, price: price, count: 1 };
  }
  console.log(CART);
};

//REMOVE ITEM FROM CART
const removeFromCart = (id) => {
  delete CART.id;
};

//INC ITEM COUNT IN CART
const incItemCount = (id) => {
  CART[id].count++;
};

//DEC ITEM COUNT IN CART
const decItemCount = (id) => {
  CART[id].count--;
  if (CART[id].count === 0) {
    removeFromCart(id);
  }
};

export default addToCart;
