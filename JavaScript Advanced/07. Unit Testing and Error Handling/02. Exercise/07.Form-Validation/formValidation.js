function validate() {
    let usernameField = document.getElementById('username')
    let emailField = document.getElementById('email')
    let passwordField = document.getElementById('password')
    let confirmPasswordField = document.getElementById('confirm-password')
    let company = document.getElementById('company')
    let companyInfo = document.getElementById('companyInfo')
    let companyNumber = document.getElementById('companyNumber')
    let submitButton = document.getElementById('submit')
    let valid = document.getElementById('valid')
    let usernamePattern = new RegExp(/[A-Za-z0-9]+/)
    let emailPattern = new RegExp(/@[\w]+[.]/)
    let passwordPattern = new RegExp(/[\w]+/)
    let validFields = {
        us: 0,
        em: 0,
        pass: 0,
        conf: 0,
        comp: 0
    }
    company.addEventListener('change', checkboxFunction)
    function checkboxFunction(event) {
        if (company.checked) {
            companyInfo.style.display = ''
        } else {
            companyInfo.style.display = 'none'
        }
    }
    submitButton.addEventListener('click', submitButtonFunction)
    function submitButtonFunction(event) {
        event.preventDefault()
        if (usernameField.value.length >= 3 &&
            usernameField.value.length <= 20 &&
            usernamePattern.test(usernameField.value)) {
            usernameField.style.borderColor = ''
            validFields.us = 1
        } else {
            usernameField.style.borderColor = 'red'
            validFields.us = 0
        }
        if (passwordField.value.length >= 5 &&
            passwordField.value.length <= 15 &&
            passwordPattern.test(passwordField.value) &&
            confirmPasswordField.value === passwordField.value) {
            passwordField.style.borderColor = ''
            validFields.pass = 1
        } else {
            passwordField.style.borderColor = 'red'
            confirmPasswordField.style.borderColor = 'red'
            validFields.pass = 0
            validFields.conf = 0
        }
        if (confirmPasswordField.value.length >= 5 &&
            confirmPasswordField.value.length <= 15 &&
            passwordPattern.test(confirmPasswordField.value) &&
            confirmPasswordField.value === passwordField.value) {
            confirmPasswordField.style.borderColor = ''
            validFields.conf = 1
        } else {
            passwordField.style.borderColor = 'red'
            confirmPasswordField.style.borderColor = 'red'
            validFields.pass = 0
            validFields.conf = 0
        }
        if (emailPattern.test(emailField.value)) {
            emailField.style.borderColor = ''
            validFields.em = 1
        } else {
            emailField.style.borderColor = 'red'
            validFields.em = 0
        }
        if (company.checked) {
            if (companyNumber.value >= 1000 &&
                companyNumber.value <= 9999) {
                companyNumber.style.borderColor = ''
                validFields.comp = 1
            } else {
                companyNumber.style.borderColor = 'red'
                validFields.comp = 0
            }
        } else {
            validFields.comp = 2
        }
        if (
            validFields.us > 0 &&
            validFields.em > 0 &&
            validFields.pass > 0 &&
            validFields.conf > 0 &&
            validFields.comp > 0
        ) {
            valid.style.display = ''
        } else {
            valid.style.display = 'none'
        }
        console.log(JSON.stringify(validFields))
    }
}