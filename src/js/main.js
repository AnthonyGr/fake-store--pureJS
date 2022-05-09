import cards from "./modules/cards";
import spinner from "./modules/spinner";
import autoScroll from "./modules/autoScroll";

window.addEventListener("DOMContentLoaded", () => {
  const url = "https://fakestoreapi.com/products";
  let goodsList = {};

  const getAllGoods = async () => {
    const response = await fetch(url);
    goodsList = await response.json();

    //Выклчаем спинер
    spinner(".preloader");

    //Формируем карточки товара
    cards(goodsList);
  };

  //INIT
  getAllGoods();
  autoScroll();
});
