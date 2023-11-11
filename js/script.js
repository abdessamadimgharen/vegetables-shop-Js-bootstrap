// Testimony
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000, 
    },
});
    
// define products
let products = JSON.parse(localStorage.getItem('products'));
let productsDOM = document.getElementById('productsDOM')
let badgeDOM = document.getElementById('badge')
let shppingCartIcon  = document.getElementById('shppingCart')
let cartItems = document.querySelector('.cartItems')
shppingCartIcon.addEventListener('click', openCartMenu)

function drawProductsUI(){
    let productsUI = '';
   for(let i = 0; i < 6; i++) {
    let discountElement = '';
    if (products[i].discount) { // Check if a discount exists
        discountElement = `<span class="deal p-1 mainBg text-white d-block">${products[i].discount}</span>`;
    }
    productsUI += `
        <div class="effect-card product col-md-5 col-lg-3 mx-2 text-center my-2 bg-white rounded overflow-hidden">
            <div class="image overflow-hidden">
                <img onclick="saveProductId(${products[i].id})"  src="${products[i].imageSrc}" class="w-100">
            </div>
            <div class="infos pt-3">
            <a href="#" class="text-decoration-none text-uppercase text-muted fs-4" onclick="saveProductId(${products[i].id})">${products[i].title}</a>
            <div class="price mt-2 d-flex justify-content-around align-items-center mainBg p-1 text-white">
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
drawProductsUI()

let addedItem = localStorage.getItem('productsInCart')? JSON.parse(localStorage.getItem('productsInCart')) : []
if(addedItem) {
    addedItem.map(item => {
        cartItemProducts.innerHTML += `
        <p class="m-0 fw-bold bg-white text-muted text-uppercase p-2 mb-2">${item.title} <img style="width: 30px;height:30px" src="${item.imageSrc}"></p>
        `
    })
    badgeDOM.classList.remove('d-none')
    badgeDOM.textContent = cartItemProducts.querySelectorAll('p').length
}


function openCartMenu(){
    if(cartItemProducts.querySelectorAll('p').length > 0) {cartItems.classList.toggle('d-none')}
}


let typed = new Typed(".auto-input", {
    strings: ["GreenGrocer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
})

let typed2 = new Typed(".auto_input", {
    strings: ["Our satisfied customer says"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
})

// handle Card Visibility
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

let getOffer = document.getElementById('getOffer')
getOffer.addEventListener('click', showAlert)
function showAlert() {
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
}

var targetDate = new Date('2023-11-06T11:59:01').getTime();

var countdown = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
        // Add 30 days to the target date
        targetDate += 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
        timeRemaining = targetDate - now; // Recalculate timeRemaining
    }

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Pad single-digit values with a leading '0'
    days = days.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    var countdownElement = document.getElementById('countdown');
    
    countdownElement.innerHTML = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds;

    if (timeRemaining < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "Sorry, the Deal of the Week has expired. Check back next week for a new exciting offer!";
        countdownElement.style.fontSize = '18px';
    }
}, 1000);
