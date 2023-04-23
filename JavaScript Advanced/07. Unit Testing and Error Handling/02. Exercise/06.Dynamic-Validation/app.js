function validate() {
    let inputField = document.getElementById('email')
    let pattern = new RegExp(/[a-z]+@[a-z]+[.][a-z]+/g)

    inputField.addEventListener('change', () => {
        if (pattern.test(inputField.value)) {
            inputField.classList.remove('error')
        } else {
            inputField.classList.add('error')
        }
    })
}