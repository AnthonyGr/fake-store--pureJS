import cards from "./modules/cards";
import spinner from "./modules/spinner";
import autoScroll from "./modules/autoScroll";

window.addEventListener("DOMContentLoaded", () => {
  const requestUrl = "https://fakestoreapi.com/products";

  const getAllGoods = (url) => {
    return fetch(url).then((res) => res.json());
  };

  getAllGoods(requestUrl)
    .then((data) => {
      //Формиреуем карточки товара
      cards(data);
      //Скрываем спиннер
      spinner(".preloader");
      //Плавная прокрутка
      autoScroll();
    })
    .catch((err) => {
      spinner(".preloader");
      alert("Some error, try refresh page");
    });
});
