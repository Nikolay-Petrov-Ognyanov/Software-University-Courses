let topicNameField = document.querySelector('[name="topicName"]')
let usernameField = document.querySelector('[name="username"]')
let postTextField = document.querySelector('[name="postText"]')
document.querySelector('[class="cancel"]').addEventListener('click', cancelFunction)
function cancelFunction(event) {
    event.preventDefault()
    topicNameField.value = ''
    usernameField.value = ''
    postTextField.value = ''
}
document.querySelector('[class="public"]').addEventListener('click', postFunction)
async function postFunction(event) {
    event.preventDefault()
    if (topicNameField.value != '' &&
        usernameField.value != '' &&
        postTextField.value != '') {
        let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                topicName: topicNameField.value.trim(),
                username: usernameField.value.trim(),
                postText: postTextField.value.trim()
            })
        })
        let data = await response.json()
        console.log(data)
        getPosts()
        topicNameField.value = ''
        usernameField.value = ''
        postTextField.value = ''
    }
}
async function getPosts(event) {
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    let data = await response.json()
    console.log(data)
}