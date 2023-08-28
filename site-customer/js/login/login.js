// Sự kiện window.onload có ý nghĩa rằng khi trình duyệt đã load xong mọi thứ (image, js, css) thì những đoạn code nằm bên trong đó mới được chạy. 
window.onload = function () {
    class User {
        constructor(email, pswd) {
            this.email = email
            this.pswd = pswd
        }
    }
    document.getElementById("btn-login").addEventListener("click", onLogin);

    function onLogin() {
        let email = document.getElementById("login-email").value
        let pswd = document.getElementById("login-pswd").value

        if (validateEmail(email) == true && validatePassword(pswd) == true) {
            let UserLogin = new User(email, pswd);
            let usersStorage = localStorage.getItem('users')

            if (!usersStorage) {
                document.getElementById('invalid-msg').innerHTML = "Invalid email or password!";
                return false
            } else {
                document.getElementById('invalid-msg').innerHTML = "";
                usersStorage = JSON.parse(usersStorage)
            }

            const indexOfUser = usersStorage.findIndex(i => i.email === email);
            if (indexOfUser !== -1) {
                location.href = "../../pages/dashboard/index.html";
            } else {
                document.getElementById('invalid-msg').innerHTML = "Account not registered";
            }
        }
    }
    function validatePassword(password) {
        if (password == "") {
            document.getElementById('invalid-pswd').innerHTML = "Please enter your password!";
            return false;
        }
        document.getElementById('invalid-pswd').innerHTML = "";
        return true;
    }

    function validateEmail(email) {
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == "") {
            document.getElementById('invalid-email').innerHTML = "Please enter your email!";
            return false;
        }
        if (!email.toString().match(emailRegex)) {
            document.getElementById('invalid-email').innerHTML = "Please enter a valid email";
            return false;
        }
        document.getElementById('invalid-email').innerHTML = "";
        return true;
    }
}

document.getElementById("btn-logout").addEventListener("click", onLogout);
function onLogout() {
    localStorage.clear()
    location.href = "/site-customer/pages/login/index.html"
}