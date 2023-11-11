// document.addEventListener('DOMContentLoaded', function () {
let subtotal = document.getElementById('subtotal')
let totalDOM = document.getElementById('total')
let tbodyDOM = document.getElementById('tbody');
tbodyDOM.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('plus')) {
        const quantityInput = target.closest('.product').querySelector('.quantity-input');
        quantityInput.value = parseInt(quantityInput.value) + 1;
        calculateCartTotal();
    } else if (target.classList.contains('minus')) {
        const quantityInput = target.closest('.product').querySelector('.quantity-input');
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            calculateCartTotal();
        }
    }
});
(function drawAndCalc() {
    let productsInCart = localStorage.getItem('productsInCart');
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        drawProductsUI(items);
        calculateCartTotal();
    }           
})()
function drawProductsUI(items) {
    let productsUI = items.map(item => {
        return `
        <tr class="product shadow-none mt-3">
            <td style="width: 210px">
                <img src="${item.imageSrc}">
            </td>
            <td>
                <h3 class="fw-bold">${item.title}</h3>
                <span class="fw-bolder text-muted fs-6">$${item.price}</span>

            </td>
            <td class="d-flex">
                <div>
                    <button class="d-block minus mt-3 quantity-button mainBg border-0 cursor-pointer rounded text-white fw-bolder">-</button>
                    <input type="text" class="d-block quantity-input text-center border-0 fw-bolder" value="1">
                    <button class="d-block plus mb-3 quantity-button mainBg border-0 cursor-pointer rounded text-white fw-bolder">+</button>
                </div>
                <i style="cursor:pointer" class="bi bi-trash3-fill text-danger pt-3 ps-4 fs-4" onclick="removeFromCart(${item.id})"></i>
                </td>
        </tr>
        `;
    });
    tbodyDOM.innerHTML = productsUI.join('');
}
function calculateCartTotal() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    let total = 0;
    quantityInputs.forEach(quantityInput => {
        const price = parseFloat(quantityInput.closest('.product').querySelector('.text-muted').textContent.replace('$', ''));
        const quantity = parseInt(quantityInput.value);
        total += price * quantity;
    })
    subtotal.innerHTML = `$${total.toFixed(2)}`
    totalDOM.innerHTML = `$${total.toFixed(2)}`
    localStorage.setItem('totalMount', total.toFixed(2))
}
// });
function removeFromCart(id) {
    let productsInCart = localStorage.getItem('productsInCart')
    if (productsInCart) {
        let items = JSON.parse(productsInCart);
        let filteredItems = items.filter(item => item.id != id);
        localStorage.setItem('productsInCart', JSON.stringify(filteredItems));
        drawProductsUI(filteredItems);
        calculateCartTotal();
        updateCartUI(filteredItems);
    } 
}
shppingCartIcon.addEventListener('click', function () {
    cartItems.classList.toggle('d-none');
});
function updateCartUI(filteredItems) {
    cartItemProducts.innerHTML = '';
    if (filteredItems && filteredItems.length > 0) {
        badgeDOM.textContent = filteredItems.length;
        filteredItems.forEach(item => {
            cartItemProducts.innerHTML += `<p class="m-0 fw-bold bg-white text-muted text-uppercase p-2 mb-2">${item.title} <img style="width: 30px;height:30px" src="${item.imageSrc}"></p>`;
        });
    } else { 
        badgeDOM.textContent = '0';
        cartItems.classList.add('d-none');
    }
}