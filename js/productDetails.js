// define product
let products = JSON.parse(localStorage.getItem('products'));
let getProduct = localStorage.getItem('choosenItemId');
let productsDOM = document.getElementById('productsDOM')
let badgeDOM = document.getElementById('badge')
let shppingCartIcon  = document.getElementById('shppingCart')
let cartItems = document.querySelector('.cartItems')
shppingCartIcon.addEventListener('click', openCartMenu)

let productDetails = products.find(product => product.id === +getProduct)

productsDOM.innerHTML = `
<div class="col-md-8 col-lg-5 me-0 me-lg-3  text-center text-lg-start mb-4 mb-lg-0 rounded">
    <img src="${productDetails.imageSrc}" class="w-100">
</div>
<div class="col-md-8 col-lg-5  text-center text-lg-start mb-4 mb-lg-0">
    <h1 style="font-size: 40px;" class="my-3">${productDetails.title}</h1>

    <div class="d-lg-flex align-items-center justify-content-evenly mb-3">
        <div class="d-flex align-items-center justify-content-center">
            <span class="pe-2 fw-bold text-muted">4.5</span>
            <div style="color: #fbbc05" class="d-flex">
                <i class="bi bi-star-fill "></i>
                <i class="bi bi-star-fill "></i>
                <i class="bi bi-star-fill "></i>
                <i class="bi bi-star-fill "></i>
                <i class="bi bi-star-half "></i>
            </div>
        </div>
        <div class="d-flex align-items-center fw-bold text-muted justify-content-center">
            <span class="pe-2">98</span>
            <span>Rating</span>
        </div>
        <div class="d-flex align-items-center fw-bold text-muted justify-content-center">
            <span class="pe-2">466</span>
            <span>Sold</span>
        </div>
    </div>
    <span class="mainColor fw-bolder fs-4 mb-1">$${productDetails.price}</span>
    <div>
        <i style="font-size: 10px;" class="bi bi-circle-fill mainColor"></i>
        <span class="text-muted">In Sold</span>
    </div>
    <p style="color: #777; font-size: 17px;" class="my-3 lh-lg">
        Discover the finest selection of fruits and vegetables at The Green Grocer. We bring you quality and flavor in every bite, from crisp vegetables to juicy fruits. Elevate your meals with our wholesome, mouthwatering ingredients.
    </p>
    <button class="btn mt-4 mainBg btn-lg text-light btnEffect rounded-0 px-5 py-3 fw-bold" onclick="addToCart(${productDetails.id})">Add to cart</button>
    </div>
`
let addedItem = localStorage.getItem('productsInCart')? JSON.parse(localStorage.getItem('productsInCart')) : []
if(addedItem) {
    addedItem.map(item => {
        cartItemProducts.innerHTML += `<p class="m-0 fw-bold bg-white text-muted text-uppercase p-2 mb-2">${item.title} <img style="width: 30px;height:30px" src="${item.imageSrc}"></p>`
    })
    badgeDOM.classList.remove('d-none')
    badgeDOM.textContent = cartItemProducts.querySelectorAll('p').length
}
function addToCart(id) {
    if(loginCheck === 'true') {
        let choosenProduct  = products.find(product => product.id === id)
        cartItemProducts.innerHTML += ` <p class="m-0 fw-bold bg-white text-muted text-uppercase p-2 mb-2">${choosenProduct.title} <img style="width: 30px;height:30px" src="${choosenProduct.imageSrc}"></p>`
        addedItem = [...addedItem, choosenProduct]
        localStorage.setItem('productsInCart', JSON.stringify(addedItem))

        badgeDOM.classList.remove('d-none')
        badgeDOM.textContent = cartItemProducts.querySelectorAll('p').length

    } else {
        location = 'login.html'
    }
}

function openCartMenu(){
    if(cartItemProducts.querySelectorAll('p').length > 0) {cartItems.classList.toggle('d-none')}
}

