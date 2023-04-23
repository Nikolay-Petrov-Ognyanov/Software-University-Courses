let url = 'http://localhost:3030/jsonstore/phonebook'
let phonebook = document.getElementById('phonebook')
let personField = document.getElementById('person')
let phoneField = document.getElementById('phone')
function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', load)
    document.getElementById('btnCreate').addEventListener('click', create)
}
async function load(event) {
    phonebook.replaceChildren()
    try {
        let response = await fetch(url)
        if (response.ok == false) {
            throw new Error('Problem loading phonebook')
        }
        let data = await response.json()
        Object.values(data).forEach(entry => {
            let liElement = document.createElement('li')
            liElement.textContent = `${entry.person}: ${entry.phone}`
            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            deleteBtn.setAttribute('id', entry._id)
            deleteBtn.addEventListener('click', remove)
            liElement.appendChild(deleteBtn)
            phonebook.appendChild(liElement)
        })
    } catch (error) {
        alert(error.message)
    }
}
async function create(event) {
    if (personField.value == '' || phoneField.value == '') {
        return
    }
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: personField.value.trim(),
                phone: phoneField.value.trim()
            })
        })
        if (response.ok == false) {
            throw new Error('Error registering contant')
        }
        let data = await response.json()
        load()
        personField.value = ''
        phoneField.value = ''
    } catch (error) {
        alert(error.message)
    }
}
function remove(event) {
    if (event.target.textContent == 'Delete') {
        let currentID = event.target.id
        fetch(`${url}/${currentID}`, {
            method: 'DELETE'
        })
        .then(response => {
            load()
            return response.json()
        })
        .catch(error => error.message)

    }
}
attachEvents()