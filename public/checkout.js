let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(product => {
    total += Number(product.price);
});

document.getElementById("totalAmount").innerHTML =
"Grand Total : ₹ " + total;

function placeOrder(){

const name=document.getElementById("name").value.trim();

const phone=document.getElementById("phone").value.trim();

const address=document.getElementById("address").value.trim();

const payment=document.getElementById("payment").value;

if(name===""||phone===""||address===""){

alert("Please fill all details");

return;

}

const order={

customer:name,

phone:phone,

address:address,

payment:payment,

products:cart,

total:total,

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