const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;


const products = [
  {
    id: 1,
    name: "Blue Hoodie",
    price: 60,
    image: "/images/hoodie.jpg.webp",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "White Shirt",
    price: 40,
    image: "/images/camiseta.jpg.webp",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Grey Hoodie",
    price: 65,
    image: "/images/grey-hoodie.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    name: "Oversized Black Tee",
    price: 45,
    image: "/images/black-tee.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Cream Hoodie",
    price: 70,
    image: "/images/cream-hoodie.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Street Cargo Pants",
    price: 80,
    image: "/images/cargo-pants.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Minimal Black Cap",
    price: 30,
    image: "/images/black-cap.jpg",
    sizes: ["One Size"]
  },
  {
    id: 8,
    name: "Zip Hoodie Dark Grey",
    price: 75,
    image: "/images/zip-hoodie.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 9,
    name: "White Oversized Tee",
    price: 42,
    image: "/images/white-tee.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    name: "Black Sweatpants",
    price: 68,
    image: "/images/sweatpants.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 11,
    name: "Logo Hoodie Limited",
    price: 90,
    image: "/images/logo-hoodie.jpg",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 12,
    name: "Essential Tote Bag",
    price: 35,
    image: "/images/tote-bag.jpg",
    sizes: ["One Size"]
  }
];

app.use(express.static(path.join(__dirname, "frontend")));

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
