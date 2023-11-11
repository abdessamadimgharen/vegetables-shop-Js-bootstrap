function addToCart(id) {
    if (loginCheck === 'true') {
        let chosenProduct = products.find(product => product.id === id);

        // Check if the product is already in the cart
        if (!addedItem.some(item => item.id === chosenProduct.id)) {
            cartItemProducts.innerHTML += `<p class="m-0 fw-bold bg-white text-muted text-uppercase p-2 mb-2">${chosenProduct.title} <img style="width: 30px;height:30px" src="${chosenProduct.imageSrc}"></p>`;
            addedItem = [...addedItem, chosenProduct];
            localStorage.setItem('productsInCart', JSON.stringify(addedItem));
            badgeDOM.classList.remove('d-none');
            badgeDOM.textContent = cartItemProducts.querySelectorAll('p').length;
        }
    } else {
        location = 'login.html';
    }
}
function saveProductId(id) {
    localStorage.setItem('choosenItemId', id)
    location = 'productDetails.html'
}