const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartDiv = document.getElementById("cart");
const totalDiv = document.getElementById("total");

function render() {
  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name} (${item.size})</span>
      <span>$${item.price}</span>
      <button onclick="remove(${i})">X</button>
    `;

    cartDiv.appendChild(div);
  });

  totalDiv.innerText = "Total: $" + total;
  updateCartCount(); // 👈 ACTUALIZA CONTADOR
}

function remove(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  render();
}

render();
