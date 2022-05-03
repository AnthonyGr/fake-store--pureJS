const toast = document.querySelector("#toast");

let timerId;

const showToast = (text = "", duration = 2000) => {
  if (toast.style.display === "block") {
    toast.style.display = "none";
    clearTimeout(timerId);
  }

  toast.textContent = text + " - add to cart";
  toast.style.display = "block";
  timerId = setTimeout(() => {
    toast.style.display = "none";
  }, duration);
};

export default showToast;
