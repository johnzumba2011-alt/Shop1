function updateCartCount(animate = false) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.length;
  const el = document.getElementById("cartCount");
  const icon = document.querySelector(".cart-icon");

  if (el) el.innerText = count;

  if (animate && icon) {
    icon.classList.add("animate");
    setTimeout(() => icon.classList.remove("animate"), 300);
  }
}

updateCartCount();
