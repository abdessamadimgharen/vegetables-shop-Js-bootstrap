let products = JSON.parse(localStorage.getItem('products'));
let productsDOM = document.getElementById('productsDOM')
let searchBtn = document.getElementById('search')
searchBtn.addEventListener('input', searchProduce)
function drawProductsUI(products){
    let productsUI = '';
   for(let i = 0; i < products.length; i++) {
    let discountElement = '';
    if (products[i].discount) { // Check if a discount exists
        discountElement = `<span class="deal p-1 mainBg text-white d-block">${products[i].discount}</span>`;
    }
    productsUI += `
        <div class="effect-card product col-sm-5 col-lg-3 col-xxl-2 mx-2 text-center my-2 bg-white rounded overflow-hidden">
            <div class="image overflow-hidden">
                <img onclick="saveProductId(${products[i].id})"  src="${products[i].imageSrc}" class="w-100">
            </div>
            <div class="infos pt-3">
            <a  href="#" onclick="saveProductId(${products[i].id})" class="text-decoration-none text-uppercase text-muted fs-4">${products[i].title}</a>
            <div class="price d-flex mt-2 justify-content-around align-items-center mainBg p-1 text-white">
                <span class="fw-bold fs-5">$${products[i].price}</span>
                <i class="bi bi-cart-plus-fill fs-5" onclick="addToCart(${products[i].id})"></i>
            </div>
            </div>
            ${discountElement}
        </div>
    `
   }
   productsDOM.innerHTML = productsUI
}
drawProductsUI(products)

function searchProduce() {
    if(searchBtn.value != '') {
        let produceResults = products.filter(product => product.title.toLowerCase().indexOf(searchBtn.value.toLowerCase().trim()) != -1)
        drawProductsUI(produceResults)
    } else {
        drawProductsUI(products)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const allCards = document.querySelectorAll(".effect-card");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.5 });

    allCards.forEach(card => {
      observer.observe(card);
    });
});