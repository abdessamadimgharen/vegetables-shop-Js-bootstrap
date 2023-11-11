let form = document.getElementById('form');
form.addEventListener('submit', login);

function login(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let checkUserData = localStorage.getItem('userData');
    if (checkUserData) {
        let userData = JSON.parse(checkUserData);
        let loginSuccessful = false;
        userData.forEach(user => {
            if (user.email.trim() === email.trim() && user.password === password) {
                loginSuccessful = true;
                document.getElementById('login-alert').style.display = 'none';
            }
        });
        if (loginSuccessful) {
            location = 'index.html';  
            localStorage.setItem('loginCheck', 'true')
        } else {
            document.getElementById('login-alert').style.display = 'block';
        }
    } else {
        document.getElementById('no-user-data').style.display = ' block';
    }
}




