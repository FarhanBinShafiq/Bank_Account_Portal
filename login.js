///log in

document.getElementById('login-submit').addEventListener('click', function() {

    //Get User Email
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    //console.log(userEmail);

    //// Get User Password
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;

    if (userEmail == "Farhan@gmail.com" && userPassword == "123456") {
        window.location.href = 'banking.html';
        console.log('Valid account')
    } else {
        console.log('Invalid account')
    }


})