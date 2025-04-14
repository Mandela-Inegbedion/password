
// "Write a JavaScript function to validate a password and confirm password fields. If the fields are empty, display an error message(Please fill in the field). If the passwords don't match, display an error message(Passwords do not match). If the passwords match, display a success message(Successfully Logged in!)."


function myPassword() {
    let password = document.getElementById('password').value
    let confirmPassword = document.getElementById('confirmPassword').value

    if(password === '' || confirmPassword === '') {
        document.getElementById('pass').innerText = 'Please fill in the field'
    }else if(password !== confirmPassword) {
        document.getElementById('pass1').innerText = 'Passwords do not match'
    }else {
        alert('Successfully Logged in!')
    }

}
