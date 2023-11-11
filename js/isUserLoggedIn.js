let login = document.getElementById('login')
let logout = document.getElementById('logout')
let loginCheck = localStorage.getItem('loginCheck')
if(loginCheck === 'true') {
    login.classList.add('d-none')
    logout.classList.remove('d-none')
}
logout.addEventListener('click', logOut)

function logOut() {
    localStorage.setItem('loginCheck', 'false')
    setTimeout(() => {location = 'login.html'}, 1000)
}