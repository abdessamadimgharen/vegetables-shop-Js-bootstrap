let subtotal = document.getElementById('subtotal')
let totalDOM = document.getElementById('total')
let getTotal = localStorage.getItem('totalMount')
if(getTotal) {
    subtotal.innerHTML = `$${getTotal}`
    totalDOM.innerHTML = `$${getTotal}`
}


let fname = document.getElementById('fname')
let country = document.getElementById('country')
let email = document.getElementById('email')
let town = document.getElementById('town')
let phoneNumber = document.getElementById('phone')
let formAlert = document.getElementById('formAlert')
let formModel = document.querySelector('.formModel')
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    formAlert.classList.remove('alert', 'alert-danger')
    formAlert.innerHTML = ''
    if(
        fname.value !== '' &&
        email.value !== '' &&
        country.value !== '' &&
        address.value !== '' &&
        phoneNumber.value !== ''
    ) {
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        setTimeout(() => {location = '../cartPage.html'},1500)

        console.log('all fields are correct')
    } else {
        formAlert.classList.add('alert', 'alert-danger')
        formAlert.innerHTML = `Please fill out the required fields`
    }
});


const masterVisaForm = document.getElementById('masterVisa');
const cardName = document.getElementById('cardName');
const expirationDate = document.getElementById('expirationDate');
const securityCode = document.getElementById('securityCode');
const cardNumber = document.getElementById('cardNumber');
const provideCard = document.getElementById('provideCard')
masterVisaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
        cardName.value.trim() !== '' &&
        expirationDate.value.trim() !== '' &&
        securityCode.value.trim() !== '' &&
        cardNumber.value.trim() !== ''
    ) {
        const fieldValidations = {
            'Card Name': cardName.value !== '',
            'Expiration Date': isValidExpirationDate(expirationDate.value),
            'Security Code': isValidSecurityCode(securityCode.value),
            'Card Number': isValidCardNumber(cardNumber.value)
        };

        const allFieldsValid = Object.values(fieldValidations).every((isValid) => isValid);

        if (allFieldsValid) {
            provideCard.classList.remove('alert', 'alert-danger')
            provideCard.innerHTML = ''
            const isPaymentSuccessful = true;
            if(isPaymentSuccessful) {
                provideCard.classList.add('alert', 'alert-success')
                provideCard.innerHTML = `Your chosen payment method has been processed`
                setTimeout(() => {location = '../checkout.html'})
            }
        } else {
            for (const fieldName in fieldValidations) {
                if (!fieldValidations[fieldName]) {
                    provideCard.classList.add('alert', 'alert-danger')
                    provideCard.innerHTML = `Please provide a valid ${fieldName}.`
                    console.log(`Please provide a valid ${fieldName}.`);
                }
            }
        }
    } else {
        provideCard.classList.add('alert', 'alert-danger');
        provideCard.innerHTML = 'Please fill in all required fields.';
    }
});
function isValidCardNumber(cardNumber) {
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');
    return /^\d{16}$/.test(cardNumberWithoutSpaces);
}
function isValidExpirationDate(expirationDate) {
    const expirationDateWithoutSpaces = expirationDate.replace(/\s/g, '');
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDateWithoutSpaces);
}
function isValidSecurityCode(securityCode) {
    const securityCodeWithoutSpaces = securityCode.replace(/\s/g, '');
    return /^\d{3}$/.test(securityCodeWithoutSpaces);
}


let paypalForm = document.getElementById('paypalForm')
let paypalPassword = document.getElementById('paypalPassword')
let paypalEmail = document.getElementById('paypalEmail')

paypalForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if(
        paypalPassword.value !== '' &&
        paypalEmail.value !== ''
    ) {
        paypalAlert.classList.remove('alert', 'alert-danger')
        paypalAlert.innerHTML = ``
        if(paypalPassword.value.length < 8) {
            paypalAlert.classList.add('alert', 'alert-danger')
            paypalAlert.innerHTML = `Password must be at least 8 characters long.`
        } else {
            paypalAlert.classList.add('alert', 'alert-success')
            paypalAlert.innerHTML = `Your chosen payment method has been processed`
            setTimeout(() => {location = 'https://www.paypal.com/signin'},1500)
        }
    }  else {
        paypalAlert.classList.add('alert', 'alert-danger');
        paypalAlert.innerHTML = 'Please fill in all required fields.';
    }
})
