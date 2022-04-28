import cards from "./modules/cards";

window.addEventListener("DOMContentLoaded", () => {
  let goodsList = {};

  //GET ALL GOODS FROM SERVER
  const getAllGoods = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    goodsList = await response.json();

    //Формируем карточки товара
    cards(goodsList);
  };

  //FLOW
  getAllGoods();
});
