import { addToCart } from "./shoppingCart";
import showToast from "./toast";

const cards = (items, parent) => {
  items.forEach(({ image, title, description, price }, i) => {
    const elem = document.createElement("article");
    elem.classList.add("card");
    elem.setAttribute("data-index", i);
    elem.innerHTML = `
    <div class="card__header">
      <figure class="card__figure">
        <img
          src=${image}
          alt=""
          class="card__image"
        />
      </figure>
    </div>
    <div class="card__body">
      <h2 class="card__title">${title}</h2>
      <h3 class="card__subtitle">Card Subtitle</h3>
      <p class="card__copy">${description}</p>
    </div>
    <footer class="card__footer">
      <div class="card__actions">
        <button class="btn-buy">${price} $</button>
      </div>
    </footer>
    `;
    elem.querySelector(".btn-buy").addEventListener("click", () => {
      showToast(title, 3000);
      addToCart(i, title, price);
    });
    document.querySelector(".cards-list").appendChild(elem);
  });
};

export default cards;
