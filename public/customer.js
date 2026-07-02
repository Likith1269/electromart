let products = JSON.parse(localStorage.getItem("products")) || [];

displayProducts();

function displayProducts(list = products){

const container=document.getElementById("customerProducts");

container.innerHTML="";

if(list.length===0){

container.innerHTML="<h2>No Products Available</h2>";

return;

}

list.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<div style="position:relative;">

${product.image && product.image.trim()!=="" ?

`<img src="${product.image}" alt="${product.name}">`

:

`<div class="no-image">No Image</div>`

}

<span style="
position:absolute;
top:10px;
left:10px;
background:red;
color:white;
padding:5px 10px;
border-radius:20px;
font-size:12px;
">

10% OFF

</span>

</div>

<h3>${product.name}</h3>

<p><b>Brand :</b> ${product.brand}</p>

<p><b>Category :</b> ${product.category}</p>

<p style="font-size:18px;color:#16a34a;">

₹ ${product.price}

</p>

<p style="color:orange;font-size:18px;">

★★★★★

</p>

<button onclick="addToCart('${product.name}')">

🛒 Add To Cart

</button>

</div>

`;

});

}

function searchProduct(){

const keyword=document.getElementById("search").value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(keyword)||

product.brand.toLowerCase().includes(keyword)||

product.category.toLowerCase().includes(keyword)

);

displayProducts(filtered);

}

function addToCart(name){

const product=products.find(p=>p.name===name);

let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product Added Successfully");

}