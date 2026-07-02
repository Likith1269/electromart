let products = JSON.parse(localStorage.getItem("products")) || [];

let orders = JSON.parse(localStorage.getItem("orders")) || [];

dashboard();

displayProducts();

function dashboard(){

document.getElementById("productCount").innerHTML=products.length;

document.getElementById("orderCount").innerHTML=orders.length;

let total=0;

orders.forEach(order=>{

total+=Number(order.total);

});

document.getElementById("earnings").innerHTML="₹ "+total;

}

function addVendorProduct(){

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

const container=document.getElementById("vendorProducts");

container.innerHTML="";

products.forEach((product,index)=>{

container.innerHTML+=`

<div class="product-card">

${product.image?

`<img src="${product.image}">`

:

`<div class="no-image">No Image</div>`}

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p><b>₹ ${product.price}</b></p>

<button onclick="deleteProduct(${index})">

🗑 Delete

</button>

</div>

`;

});

}

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem("products",JSON.stringify(products));

location.reload();

}