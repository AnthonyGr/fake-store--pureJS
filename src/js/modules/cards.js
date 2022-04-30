import incCartCount from "./shoppingCart";

const cards = (items, parent) => {
  items.forEach((item, i) => {
    const elem = document.createElement("article");
    elem.classList.add("card");
    elem.setAttribute("data-index", i);
    elem.innerHTML = `
    <div class="card__header">
      <figure class="card__figure">
        <img
          src=${item.image}
          alt=""
          class="card__image"
        />
      </figure>
    </div>
    <div class="card__body">
      <h2 class="card__title">${item.title}</h2>
      <h3 class="card__subtitle">Card Subtitle</h3>
      <p class="card__copy">${item.description}</p>
    </div>
    <footer class="card__footer">
      <div class="card__actions">
        <button class="btn-buy">${item.price} $</button>
      </div>
    </footer>
    `;
    document.querySelector(".cards-list").appendChild(elem);
  });

  document.querySelectorAll(".btn-buy").forEach((btn) => {
    btn.addEventListener("click", () => {
      incCartCount(".cart-count");
    });
  });
};

export default cards;
