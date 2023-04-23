let url = 'http://localhost:3030/jsonstore/collections/books'
let tbody = document.getElementsByTagName('tbody')[0]
let titleField = document.querySelector('[name="title"]')
let authorField = document.querySelector('[name="author"]')
let form = document.getElementsByTagName('h3')[0]
let submitButton = document.getElementById('submit')
submitButton.addEventListener('click', onSubmit)

document.getElementById('loadBooks').addEventListener('click', load)
function load(event) {
    event.preventDefault()
    fetch(url)
        .then(response => {
            tbody.replaceChildren()
            return response.json()
        })
        .then(data => {
            for (let [id, book] of Object.entries(data)) {
                console.log(id, book.author)
                let row = document.createElement('tr')
                tbody.appendChild(row)
                row.setAttribute('id', id)
                let title = document.createElement('td')
                row.appendChild(title)
                title.textContent = book.title
                let author = document.createElement('td')
                row.appendChild(author)
                author.textContent = book.author
                let buttonsCell = document.createElement('td')
                row.appendChild(buttonsCell)
                let editButton = document.createElement('button')
                buttonsCell.appendChild(editButton)
                editButton.textContent = 'Edit'
                editButton.addEventListener('click', event => {
                    event.preventDefault()
                    if (event.target.textContent == 'Edit') {
                        form.textContent = 'Edit FORM'
                        submitButton.textContent = 'Save'
                        let currentID = event.target.parentElement.parentElement.id
                        fetch(url)
                            .then(response => {
                                if (response.ok == false) {
                                    throw new Error('Error loading book')
                                }
                                return response.json()
                            }
                            )
                            .then(book => {
                                titleField.value = book.title.trim()
                                authorField.value = book.author.trim()
                                
                            })
                            .catch(error => alert(error.message))

                        fetch(`${url}/${currentID}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                author: authorField.value.trim(),
                                title: titleField.value.trim()
                            })
                        })
                    }
                })
                let deleteButton = document.createElement('button')
                buttonsCell.appendChild(deleteButton)
                deleteButton.textContent = 'Delete'
                deleteButton.addEventListener('click', event => {
                    event.preventDefault()
                    if (event.target.textContent == 'Delete') {
                        let currentID = event.target.parentElement.parentElement.id
                        fetch(`${url}/${currentID}`, {
                            method: 'DELETE',
                        })
                            .then(response => {
                                if (response.ok == false) {
                                    throw new Error('Could not delete the book.')
                                }
                                load(event)
                                return response.json()
                            })
                            .catch(error => alert(error.message))
                    }
                })
            }
        })
        .catch(error => alert(error.message))
}
document.getElementById('submit').addEventListener('click', submit)
function onSubmit(event) {
    event.preventDefault()
    form.textContent = 'FORM'
    document.getElementById('submit').textContent = 'Submit'
    if (titleField.value != '' || authorField.value != '') {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: authorField.value.trim(),
                title: titleField.value.trim()
            })
        })
            .then(response => {
                if (response.ok == false) {
                    throw new Error('Problem registering book')
                }
                load(event)
                return response.json()
            })
            .then(data => console.log(data))
            .catch(error => alert(error.message))
        titleField.value = ''
        authorField.value = ''
    }
}