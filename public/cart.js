let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

function displayCart() {

    const container = document.getElementById("cartItems");

    const totalPrice = document.getElementById("totalPrice");

    const itemCount = document.getElementById("itemCount");

    container.innerHTML = "";

    let total = 0;

    itemCount.innerHTML = cart.length;

    if(cart.length === 0){

        container.innerHTML = `

        <div class="empty-cart">

            <h2>🛒 Your Cart is Empty</h2>

            <p>Add products to start shopping.</p>

        </div>

        `;

        totalPrice.innerHTML = "₹0";

        return;

    }

    cart.forEach((product,index)=>{

let qty = product.quantity || 1;

total += Number(product.price) * qty;
        let oldPrice = Math.round(Number(product.price)*1.2);

        container.innerHTML += `

        <div class="cart-card">

            <div class="cart-image">

                ${
                    product.image && product.image.trim() !== ""
                    ? `<img src="${product.image}">`
                    : `<div class="no-image">📦</div>`
                }

            </div>

            <div class="cart-details">

                <h2>${product.name}</h2>

                <p>${product.brand}</p>

                <p>⭐⭐⭐⭐⭐ 4.8</p>

                <p>

                    <span class="old-price">₹${oldPrice}</span>

                    <span class="new-price"> ₹${product.price}</span>

                </p>

               <div class="quantity-box">

<button onclick="decreaseQty(${index})">−</button>

<span>${product.quantity || 1}</span>

<button onclick="increaseQty(${index})">+</button>

</div>

<div class="cart-buttons">

<button class="save-btn" onclick="saveForLater(${index})">

❤️ Save

</button>

<button class="remove-btn" onclick="removeItem(${index})">

🗑 Remove

</button>

</div>

                </div>

            </div>

        </div>

        `;

    });

    totalPrice.innerHTML = "₹" + total;

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();

}
function saveForLater(index){

let saved = JSON.parse(localStorage.getItem("savedItems")) || [];

saved.push(cart[index]);

localStorage.setItem("savedItems", JSON.stringify(saved));

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

displayCart();

alert("❤️ Product Saved For Later");

}

function buyNow(){

    if(cart.length==0){

        alert("Your cart is empty.");

        return;

    }

    window.location.href="checkout.html";

}function increaseQty(index){

if(!cart[index].quantity){

cart[index].quantity = 1;

}

cart[index].quantity++;

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

function decreaseQty(index){

if(!cart[index].quantity){

cart[index].quantity = 1;

}

if(cart[index].quantity>1){

cart[index].quantity--;

}

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}