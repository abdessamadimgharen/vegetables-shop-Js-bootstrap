let badgeDOM = document.getElementById('badge')
let cartItemProducts = document.getElementById('cartItemProducts') 
let addedItem = JSON.parse(localStorage.getItem('productsInCart'))
let cartItems = document.querySelector('.cartItems')
let shppingCartIcon  = document.getElementById('shppingCart')
shppingCartIcon.addEventListener('click', openCartMenu)
if(addedItem) {
    addedItem.map(item => {
        cartItemProducts.innerHTML += `
        <p class="m-0 fw-bold bg-white text-muted text-uppercase p-2 mb-2">${item.title} <img style="width: 30px;height:30px" src="${item.imageSrc}"></p>
        `
    })
    badgeDOM.classList.remove('d-none')
    badgeDOM.textContent = addedItem.length
}
function openCartMenu(){
    if(addedItem.length > 0) {cartItems.classList.toggle('d-none')}
}
