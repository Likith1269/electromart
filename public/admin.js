let products = JSON.parse(localStorage.getItem("products")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

dashboard();

displayProducts();
function dashboard(){

document.getElementById("productCount").innerHTML = products.length;

document.getElementById("orderCount").innerHTML = orders.length;

let revenue = 0;

orders.forEach(order=>{

revenue += Number(order.total);

});

document.getElementById("revenue").innerHTML = "₹" + revenue;

displayOrders();

}

function addProduct(){

const file=document.getElementById("imageFile").files[0];

if(file){

const reader=new FileReader();

reader.onload=function(e){

saveProduct(e.target.result);

};

reader.readAsDataURL(file);

}else{

saveProduct(document.getElementById("image").value);

}

}

function saveProduct(image){

const product={

name:document.getElementById("name").value,

brand:document.getElementById("brand").value,

price:document.getElementById("price").value,

category:document.getElementById("category").value,

image:image,

description:document.getElementById("description").value

};

products.push(product);

localStorage.setItem("products",JSON.stringify(products));

location.reload();

}

function displayProducts(){

const container = document.getElementById("products");

container.innerHTML = "";

products.forEach((product,index)=>{

container.innerHTML += `

<div class="product-card">

<div class="product-image">

${
product.image
?
`<img src="${product.image}" alt="${product.name}">`
:
`<div class="no-image">📦</div>`
}

</div>

<div class="product-info">

<h3>${product.name}</h3>

<p class="brand">

🏷 ${product.brand}

</p>

<p>

📂 ${product.category}

</p>

<div class="price">

₹${product.price}

</div>

<p class="desc">

${product.description || "Premium Electronic Product"}

</p>

<div class="btn-group">

<button class="buy-btn"

onclick="editProduct(${index})">

✏ Edit

</button>

<button class="cart-btn"

onclick="deleteProduct(${index})">

🗑 Delete

</button>

</div>

</div>

</div>

`;

});

}

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem("products",JSON.stringify(products));

location.reload();

}
function editProduct(index){

const product = products[index];

document.getElementById("name").value = product.name;

document.getElementById("brand").value = product.brand;

document.getElementById("price").value = product.price;

document.getElementById("category").value = product.category;

document.getElementById("image").value = product.image;

document.getElementById("description").value = product.description;

products.splice(index,1);

localStorage.setItem("products",JSON.stringify(products));

displayProducts();

dashboard();

window.scrollTo({

top:0,

behavior:"smooth"

});

}
function displayOrders(){

const table = document.getElementById("ordersTable");

if(!table) return;

table.innerHTML = "";

if(orders.length === 0){

table.innerHTML = `

<tr>

<td colspan="5" style="text-align:center;padding:25px;">

No Orders Available

</td>

</tr>

`;

return;

}

orders.slice().reverse().forEach(order=>{

table.innerHTML += `

<tr>

<td>${order.customer}</td>

<td>₹${order.total}</td>

<td>${order.payment}</td>

<td>

<span class="status pending">

${order.status}

</span>

</td>

<td>${order.date}</td>

</tr>

`;

});

}