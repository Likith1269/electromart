let products = JSON.parse(localStorage.getItem("products")) || [];

displayProducts();

function displayProducts(list = products) {

    const container = document.getElementById("customerProducts");

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
        <div style="width:100%;text-align:center;padding:60px;">
            <h2>😔 No Products Available</h2>
        </div>
        `;

        return;
    }

    list.forEach((product, index) => {

        let oldPrice = Math.round(Number(product.price) * 1.20);

        container.innerHTML += `

<div class="product-card">

<div class="product-image">

${product.image && product.image.trim() !== ""

? `<img src="${product.image}" alt="${product.name}">`

: `<div class="no-image">📦</div>`}

<div class="discount-badge">

20% OFF

</div>

<div class="wishlist-icon"

onclick="wishlist(${index})">

❤

</div>

</div>

<div class="product-info">

<h3>${product.name}</h3>

<p class="brand">

${product.brand}

</p>

<div class="rating">

⭐⭐⭐⭐⭐

<span>

4.8

</span>

</div>

<div class="price">

<span class="old-price">

₹${oldPrice}

</span>

<span class="new-price">

₹${product.price}

</span>

</div>

<p class="desc">

${product.description || "Premium Electronic Product"}

</p>

<div class="btn-group">

<button class="cart-btn"

onclick="addToCart(${index})">

🛒 Add To Cart

</button>

<button class="buy-btn"

onclick="buyNow(${index})">

⚡ Buy Now

</button>

</div>

</div>

</div>

`;

    });

}

function addToCart(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push(products[index]);

localStorage.setItem("cart", JSON.stringify(cart));

alert("✅ Product Added To Cart");

}

function buyNow(index){

let cart=[];

cart.push(products[index]);

localStorage.setItem("cart", JSON.stringify(cart));

window.location.href="checkout.html";

}

function wishlist(index){

let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

wishlist.push(products[index]);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert("❤ Added To Wishlist");

}

function searchProduct(){

let keyword=document.getElementById("search").value.toLowerCase();

let filtered=products.filter(product=>

product.name.toLowerCase().includes(keyword)||

product.brand.toLowerCase().includes(keyword)||

product.category.toLowerCase().includes(keyword)

);

displayProducts(filtered);

}

let slideIndex=0;

showSlides();

function showSlides(){

let slides=document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}

let time=7200;

setInterval(function(){

let hours=Math.floor(time/3600);

let minutes=Math.floor((time%3600)/60);

let seconds=time%60;

document.getElementById("timer").innerHTML=

hours+"h : "+minutes+"m : "+seconds+"s";

if(time>0){

time--;

}

},1000);
function filterCategory(category){

if(category==="All"){

displayProducts(products);

return;

}

let filtered=products.filter(product=>

product.category.toLowerCase()===category.toLowerCase()

);

displayProducts(filtered);

}

function sortLowHigh(){

let sorted=[...products];

sorted.sort((a,b)=>Number(a.price)-Number(b.price));

displayProducts(sorted);

}

function sortHighLow(){

let sorted=[...products];

sorted.sort((a,b)=>Number(b.price)-Number(a.price));

displayProducts(sorted);

}
function displayBestSeller(){

const container = document.getElementById("bestSellerProducts");

if(!container) return;

container.innerHTML = "";

products.slice(0,4).forEach((product,index)=>{

container.innerHTML += createCard(product,index);

});

}

function displayLatest(){

const container = document.getElementById("latestProducts");

if(!container) return;

container.innerHTML = "";

// Products after the first 4
products.slice(4,8).forEach((product,index)=>{

container.innerHTML += createCard(product,index+4);

});

}

function createCard(product,index){

let oldPrice=Math.round(Number(product.price)*1.2);

return `

<div class="product-card">

<div class="product-image">

${product.image?

`<img src="${product.image}">`

:`<div class="no-image">📦</div>`}

<div class="discount-badge">

20% OFF

</div>

</div>

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p class="rating">

⭐⭐⭐⭐⭐ 4.8

</p>

<p>

<span class="old-price">

₹${oldPrice}

</span>

<span class="new-price">

₹${product.price}

</span>

</p>

<div class="btn-group">

<button class="cart-btn"

onclick="addToCart(${index})">

🛒 Cart

</button>

<button class="buy-btn"

onclick="buyNow(${index})">

⚡ Buy

</button>

</div>

</div>

</div>

`;

}
