let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

function displayCart(){

const container=document.getElementById("cartItems");

container.innerHTML="";

let total=0;

if(cart.length===0){

container.innerHTML="<h2>Your Cart is Empty 😔</h2>";

document.getElementById("totalPrice").innerHTML="Total : ₹0";

return;

}

cart.forEach((product,index)=>{

total+=Number(product.price);

container.innerHTML+=`

<div class="product-card">

${product.image && product.image.trim()!==""

? `<img src="${product.image}">`

: `<div class="no-image">No Image</div>`}

<h3>${product.name}</h3>

<p><b>${product.brand}</b></p>

<p style="font-size:22px;color:#16a34a;">

₹ ${product.price}

</p>

<p style="color:orange;">

★★★★★

</p>

<button onclick="removeItem(${index})">

🗑 Remove

</button>

</div>

`;

});

document.getElementById("totalPrice").innerHTML=

"Grand Total : ₹ "+total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

function buyNow(){

if(cart.length===0){

alert("Your cart is empty");

return;

}

window.location.href="checkout.html";

}