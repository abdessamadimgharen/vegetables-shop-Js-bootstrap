let form = document.getElementById('form')
let userData = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')) : [];
let passwordWarning = document.getElementById('passwordWarning')
form.addEventListener('submit', register)

function register(e) {
    e.preventDefault()
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    if(username &&  password &&  email) {
        document.getElementById('register-alert').style.display = 'none'
        if(password.length < 8) {
            passwordWarning.classList.add('alert', 'alert-danger')
            passwordWarning.innerHTML = `Password must be at least 8 characters long.`
        } else {
            passwordWarning.classList.remove('alert', 'alert-danger')
            passwordWarning.innerHTML = ``
            let newUser = {
                username: username,
                email:email,
                password: password
            }
            userData.push(newUser)
            localStorage.setItem('userData', JSON.stringify(userData)) 
            setTimeout(() => {location = 'login.html'}, 1000)
        }
    } else {
        document.getElementById('register-alert').style.display = 'block'
    }
}