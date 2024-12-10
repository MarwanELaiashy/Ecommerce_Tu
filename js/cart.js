const CartItems = document.querySelector(".cart-items");

let cartTotal = 0;
function dispalyCartItems() {
  const items = JSON.parse(localStorage.getItem("cart"));

  if (items === null || items.length === 0) {
    CartItems.innerHTML = `<p class="cart_empty">Your cart is empty :(</p>`;
    return;
  }

  CartItems.innerHTML = "";

  items.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList = "cart_item";

    cartItem.innerHTML = `
            <p class="cart_id">
                ${item.id}
            </p>
            <p class="cart_title">${item.title}</p>
            <img src="${item.image}" alt="${item.title}" class="cart_img"/>
            <p class="cart_price">${item.price}</p>
            <p class="cart_delete" data-index="${index}"><img src="./image/delete.png" alt="deleteImage" class="delete_img"/></p>
        `;
    CartItems.appendChild(cartItem);
  });
  const deleteButtons = document.querySelectorAll(".cart_delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      deleteCartItem(index);
    });
  });
}

function deleteCartItem(index) {
  const items = JSON.parse(localStorage.getItem("cart"));
  items.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(items));
  dispalyCartItems();
}

dispalyCartItems();

// mobile nav

const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});
