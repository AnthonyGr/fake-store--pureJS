const CART = {};
let quantity = 0,
  cartModal = document.querySelector("#modal"),
  cartModalOverlay = document.querySelector("#modal-overlay"),
  cart = document.querySelector(".cart"),
  cartCloseBtn = document.querySelector("#close-button"),
  cartTotalCost = document.querySelector(".shopping-list__total"),
  cartQuantity = document.querySelector(".cart-quantity"),
  cartClearBtn = document.querySelector(".shopping-list__clear"),
  cartCheckoutBtn = document.querySelector(".shopping-list__buy");

//EVENT LISTENERS
cart.addEventListener("click", () => {
  toggleCart();
});

cartCloseBtn.addEventListener("click", () => {
  toggleCart();
});

cartClearBtn.addEventListener("click", () => {
  clearCart();
});

cartCheckoutBtn.addEventListener("click", () => {
  checkoutOrder();
});

//FUCNTIONS
const toggleCart = () => {
  cartModal.classList.toggle("closed");
  cartModalOverlay.classList.toggle("closed");

  //IF MODAL OPENING
  if (!cartModal.classList.contains("closed")) {
    updateCart();
  }
};

const updateGoodsQuantity = () => {
  const quantity = Object.keys(CART).length;
  if (quantity === 0) {
    cartQuantity.textContent = "";
  } else {
    cartQuantity.textContent = quantity;
  }
};

const updateCart = () => {
  //CLEAR CART
  let totalCost = 0;
  const row = document.querySelector(".shopping-list__row");
  row.innerHTML = "";
  //FILL CART
  for (const [key, value] of Object.entries(CART)) {
    const elem = document.createElement("div");
    elem.classList.add("shopping-list__item");
    elem.innerHTML = `
    <div class="shopping-list__name"><span>${value.name}</span></div>
    <div class="shopping-list__price"><span>${value.price}</div>
    <div class="shopping-list__quantity">
    <span>
      <div class="plus">&#10009;</div>
      ${value.quantity}
      <div class="minus">&#9866;</div>
    </span>
    </div>
    <div class="shopping-list__cost"><span>
    ${(value.price * value.quantity).toFixed(2)}</span></div>
    `;

    elem.querySelector(".plus").addEventListener("click", () => {
      incItemCount(key);
    });
    elem.querySelector(".minus").addEventListener("click", () => {
      decItemCount(key);
    });
    row.appendChild(elem);
    totalCost += value.price * value.quantity;
  }

  cartTotalCost.textContent = `Total cost: ${totalCost.toFixed(2)}$`;
};

const addToCart = (id, title, price) => {
  if (CART[id]) {
    CART[id].quantity++;
  } else {
    CART[id] = { name: title, price: price, quantity: 1 };
  }

  updateGoodsQuantity();
};

const removeFromCart = (id) => {
  delete CART[id];
  updateGoodsQuantity();
};

const incItemCount = (id) => {
  CART[id].quantity++;
  if (!cartModal.classList.contains("closed")) {
    updateCart();
  }
};

const decItemCount = (id) => {
  CART[id].quantity--;
  if (CART[id].quantity === 0) {
    removeFromCart(id);
  }
  if (!cartModal.classList.contains("closed")) {
    updateCart();
  }
};

const clearCart = () => {
  Object.keys(CART).forEach((key) => delete CART[key]);
  updateCart();
  updateGoodsQuantity();
};

const checkoutOrder = () => {
  alert("Thanks for your order!");
  clearCart();
  toggleCart();
};

export { addToCart };
