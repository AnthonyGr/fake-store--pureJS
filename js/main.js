import cards from "./modules/cards";

window.addEventListener("DOMContentLoaded", () => {
  let goodsList = {};

  //GET ALL GOODS FROM SERVER
  const getAllGoods = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    goodsList = await response.json();
    console.log(goodsList);
  };

  //FLOW
  getAllGoods();
  cards.createCards(goodsList);
});
