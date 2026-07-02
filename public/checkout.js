let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

const checkoutItems = document.getElementById("checkoutItems");

checkoutItems.innerHTML = "";

cart.forEach((product,index)=>{

let qty = product.quantity || 1;

let subtotal = Number(product.price) * qty;

total += subtotal;

checkoutItems.innerHTML += `

<div class="checkout-card">

<div class="checkout-image">

${
product.image && product.image.trim()!==""
?
`<img src="${product.image}">`
:
`<div class="no-image">📦</div>`
}

</div>

<div class="checkout-info">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p>Quantity : ${qty}</p>

<p class="new-price">₹${subtotal}</p>

</div>

</div>

`;

});

document.getElementById("totalAmount").innerHTML = "₹" + Math.max(total-100,0);

function placeOrder(){

const name=document.getElementById("name").value.trim();

const phone=document.getElementById("phone").value.trim();

const email=document.getElementById("email").value.trim();

const address=document.getElementById("address").value.trim();

const city=document.getElementById("city").value.trim();

const pincode=document.getElementById("pincode").value.trim();

const payment=document.getElementById("payment").value;

if(name===""||phone===""||email===""||address===""||city===""||pincode===""){

alert("Please fill all details.");

return;

}

const order={

customer:name,

phone,

email,

address,

city,

pincode,

payment,

products:cart,

total:Math.max(total-100,0),

status:"Pending",

date:new Date().toLocaleString()

};

let orders=JSON.parse(localStorage.getItem("orders"))||[];

orders.push(order);

localStorage.setItem("orders",JSON.stringify(orders));

localStorage.removeItem("cart");

alert("🎉 Order Placed Successfully!");

window.location.href="customer.html";

}