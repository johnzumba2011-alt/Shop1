const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("/products")
  .then(res => res.json())
  .then(products => {
    const product = products.find(p => p.id == productId);
    const container = document.getElementById("product");

    container.innerHTML = `
      <div class="product-detail">
        <img src="${product.image}">
        <div>
          <h1>${product.name}</h1>
          <p class="price">$${product.price}</p>

          <div class="sizes">
            ${product.sizes.map(s => `<span>${s}</span>`).join("")}
          </div>

          <button id="add">Add to bag</button>
        </div>
      </div>
    `;

    let sizeSelected = null;

    document.querySelectorAll(".sizes span").forEach(span => {
      span.onclick = () => {
        document.querySelectorAll(".sizes span").forEach(s => s.classList.remove("active"));
        span.classList.add("active");
        sizeSelected = span.innerText;
      };
    });

    document.getElementById("add").onclick = () => {
      if (!sizeSelected) {
        alert("Selecciona talla");
        return;
      }

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name: product.name, price: product.price, size: sizeSelected });
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Agregado al carrito");
      updateCartCount(); // 👈 ACTUALIZA CONTADOR
    };
  });
