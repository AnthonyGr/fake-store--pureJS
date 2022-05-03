const showToast = (text = "Add to cart", duration = 2000) => {
  const toast = document.querySelector("#toast");

  //TODO: Обработка быстрых нажатий на разные товары
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
};

export default showToast;
