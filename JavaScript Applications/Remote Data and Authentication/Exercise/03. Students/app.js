let firstNameField = document.querySelector('[name="firstName"]')
let lastNameField = document.querySelector('[name="lastName"]')
let facultyNumberField = document.querySelector('[name="facultyNumber"]')
let gradeField = document.querySelector('[name="grade"]')
let tbody = document.getElementsByTagName('tbody')[0]
let url = 'http://localhost:3030/jsonstore/collections/students'
document.getElementById('submit').addEventListener('click', addStudent)
function addStudent(event) {
    event.preventDefault()
    if (firstNameField.value != '' &&
        lastNameField.value != '' &&
        facultyNumberField.value != '' &&
        gradeField.value != '') {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstNameField.value.trim(),
                lastName: lastNameField.value.trim(),
                facultyNumber: facultyNumberField.value.trim(),
                grade: gradeField.value.trim()
            })
        })
            .then(response => response.json())
            .catch(error => alert(error.message))
    }
    loadStudents()
}
function loadStudents() {
    tbody.replaceChildren()
    fetch(url)
        .then(response => response.json())
        .then(data => {
            Object.values(data).forEach(student => {
                let trElement = document.createElement('tr')
                tbody.appendChild(trElement)
                let firstName = document.createElement('td')
                firstName.textContent = student.firstName
                trElement.appendChild(firstName)
                let lastName = document.createElement('td')
                lastName.textContent = student.lastName
                trElement.appendChild(lastName)
                let facultyNumber = document.createElement('td')
                facultyNumber.textContent = student.facultyNumber
                trElement.appendChild(facultyNumber)
                let grade = document.createElement('td')
                grade.textContent = Number(student.grade).toFixed(2)
                trElement.appendChild(grade)
            })
        })
}
loadStudents()