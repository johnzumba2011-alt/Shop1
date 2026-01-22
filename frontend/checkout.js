const cart = JSON.parse(localStorage.getItem("cart")) || [];
const summary = document.getElementById("summary");
const form = document.getElementById("checkoutForm");

let total = 0;

summary.innerHTML = "<h3>Resumen</h3>";

cart.forEach(item => {
  total += item.price;
  summary.innerHTML += `
    <p>${item.name} (${item.size}) - $${item.price}</p>
  `;
});

summary.innerHTML += `<hr><strong>Total: $${total}</strong>`;

form.addEventListener("submit", e => {
  e.preventDefault();

  alert("Orden realizada con éxito 🎉");

  localStorage.removeItem("cart");
  window.location.href = "/";
});
