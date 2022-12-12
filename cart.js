const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
let cart = [];

//getting the product
class Products {
  async getProducts() {
    try {
      let response = await fetch("product.json");
      let data = await response.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;

        return { title, id, image, price };
      });
      console.log(products);

      return products;
    } catch (error) {
      console.log(error);
    }
  }
}
//display product
class UI {
  displayProducts(products) {
    console.log(products);
    let result = "";
    products.forEach((product) => {
      result += `<article class="product">
          <div class="img-container">
            <img
              src=${product.image}
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id=${product.id}>
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>${product.title}</h3>
          <h4>$${product.price}</h4>
        </article> `;
    });
    productsDOM.innerHTML = result;
  }
  getBagBtns() {
    const buttons = [...document.querySelectorAll(".bag-btn")];
    console.log(buttons);
    buttons.forEach((button) => {
      let id = button.dataset.id;
      console.log(id);
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "In Cart";
        button.disabled = true;
      }
    });
  }
}

//local Storage

class Storage {
  static savedProducts(products) {
    localStorage.setItem("product", JSON.stringify(products));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.savedProducts(products);
    })
    .then(() => {
      ui.getBagBtns();
    });
});
