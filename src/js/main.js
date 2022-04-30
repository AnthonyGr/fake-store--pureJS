import cards from "./modules/cards";
import spinner from "./modules/spinner";

window.addEventListener("DOMContentLoaded", () => {
  let goodsList = {};

  //GET ALL GOODS FROM SERVER
  const getAllGoods = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    goodsList = await response.json();

    //Выклчаем спинер
    spinner(".preloader");

    //Формируем карточки товара
    cards(goodsList);
  };

  //FLOW
  getAllGoods();
});
