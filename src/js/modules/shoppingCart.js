const CART = {};
let quantity = 0,
  cartModal = document.querySelector("#modal"),
  cartModalOverlay = document.querySelector("#modal-overlay"),
  cart = document.querySelector(".cart"),
  cartCloseBtn = document.querySelector("#close-button"),
  cartTotalCost = document.querySelector(".shopping-list__total"),
  cartQuantity = document.querySelector(".cart-quantity");

cart.addEventListener("click", () => {
  toggleCart();
});

cartCloseBtn.addEventListener("click", () => {
  toggleCart();
});

const toggleCart = () => {
  cartModal.classList.toggle("closed");
  cartModalOverlay.classList.toggle("closed");

  //IF MODAL OPENING
  if (!cartModal.classList.contains("closed")) {
    updateCart();
  }
};

const showGoodsQuantity = () => {
  const quantity = Object.keys(CART).length;
  console.log(quantity);
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
    <div class="shopping-list__name">${value.name}</div>
    <div class="shopping-list__price">${value.price}</div>
    <div class="shopping-list__quantity">
      <div class="plus">&#10009;</div>
      ${value.quantity}
      <div class="minus">&#9866;</div>
    </div>
    <div class="shopping-list__cost">${value.price * value.quantity}</div>
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

  cartTotalCost.textContent = `Total cost: ${totalCost}$`;
};

//ADD ITEM TO CART
const addToCart = (id, title, price) => {
  if (CART[id]) {
    CART[id].quantity++;
  } else {
    CART[id] = { name: title, price: price, quantity: 1 };
  }

  showGoodsQuantity();
};

//REMOVE ITEM FROM CART
const removeFromCart = (id) => {
  delete CART[id];
  showGoodsQuantity();
};

//INC ITEM QUANTITY IN CART
const incItemCount = (id) => {
  CART[id].quantity++;
  if (!cartModal.classList.contains("closed")) {
    updateCart();
  }
};

//DEC ITEM QUANTITY IN CART
const decItemCount = (id) => {
  CART[id].quantity--;
  if (CART[id].quantity === 0) {
    removeFromCart(id);
  }
  if (!cartModal.classList.contains("closed")) {
    updateCart();
  }
};

export { addToCart };
