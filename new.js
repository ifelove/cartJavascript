/*setCartValue(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      const { price, amount } = item;
      tempTotal += price * amount;
      itemsTotal += amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
    console.log(cartItems, cartTotal);







  }









    addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `  <img src=${item.image} alt="product" />
            <div>
              <h4>${item.title}</h4>
              <h5>$${item.price}</h5>
              <span class="remove-item" data-id=${item.id}>remove</span>
            </div>
            <div>
              <i class="fas fa-chevron-up" data-id=${item.id}></i>  
              <p class="item-amount">
                ${amount}
              </p>
              <i class="fas fa-chevron-down" data-id=${item.id}></i>
            </div>`;
            cartContent.appendChild(div)
             console.log(cartContent);
  }

  */
