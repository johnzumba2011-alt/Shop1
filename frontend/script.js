fetch("/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
      `;

      div.onclick = () => {
        window.location.href = "/product.html?id=" + product.id;
      };

      container.appendChild(div);
    });
  });
