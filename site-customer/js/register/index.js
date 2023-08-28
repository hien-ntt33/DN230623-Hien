window.onload = function () {
    class User {
        constructor(userId, name, project, email, pswd) {
            this.userId = userId
            this.name = name
            this.project = project
            this.email = email
            this.pswd = pswd
        }
    }
    document.getElementById("btn-sign-up").addEventListener("click", onSignUp);

    function onSignUp() {
        let name = document.getElementById("sign-username").value
        let userId = 'UID'+ Math.floor((Math.random() * 1000) + 100)
        let project = document.getElementById("sign-project").value
        let email = document.getElementById("sign-email").value
        let pswd = document.getElementById("sign-pswd").value
        console.log(userId)
        if (checkUsername(name) == true && checkProject(project) == true && validateEmail(email) == true && validatePassword(pswd) == true) {
            let UserSignUp = new User(userId, name, project, email, pswd);
            let usersStorage = localStorage.getItem('users')

            if (!usersStorage) {
                usersStorage = new Array();
            } else {
                usersStorage = JSON.parse(usersStorage)
            }
            
            const indexOfUser = usersStorage.findIndex(i => i.email === email);
            if (indexOfUser !== -1) {
                alert('Account already exists!')
            } else {
                usersStorage.push(UserSignUp)
                localStorage.setItem('users', JSON.stringify(usersStorage))
                alert('Registration completed successfully!');
                location.href = "../../pages/login/login.html";
            }
        }
        document.getElementById("sign-pswd").value = ''
    }

    function validatePassword(password) {
        console.log(password)
        var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        // Check if the password is empty
        if (password == "") {
            document.getElementById('invalid-pswd').innerHTML="Please enter your password!";
            return false;
        }
        // Kiểm tra xem mật khẩu có đủ mạnh không
        if (!password.toString().match(passwordRegex)) {
            document.getElementById('invalid-pswd').innerHTML="Password must be at least 8 characters, including one UPPPERCASE and lowercase and number and symbol";
            return false;
        }
        document.getElementById('invalid-pswd').innerHTML="";
        return true;
    }

    function validateEmail(email) {
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == "") {
            document.getElementById('invalid-email').innerHTML="Please enter your email!";
            return false;
        }
        if (!email.toString().match(emailRegex)) {
            document.getElementById('invalid-email').innerHTML="Please enter a valid email";
            return false;
        }
        document.getElementById('invalid-email').innerHTML="";
        return true;
    }

    function checkUsername(name){
        if (name == ""){
            document.getElementById('check-username').innerHTML="Username cannot be empty!";
            return false;
        }
        document.getElementById('check-username').innerHTML=""
        return true;
    }
    function checkProject(project){
        if (project == ""){
            document.getElementById('check-project').innerHTML="Project cannot be empty!";
            return false;
        }
        document.getElementById('check-project').innerHTML="";
        return true;
    }
}