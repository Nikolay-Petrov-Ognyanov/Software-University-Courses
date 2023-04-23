function attachEvents() {
    let authorField = document.querySelector(`[name="author"]`)
    let contentField = document.querySelector(`[name="content"]`)
    let messages = document.getElementById(`messages`)
    let url = `http://localhost:3030/jsonstore/messenger`
    document.querySelector('[value="Send"]').addEventListener('click', async event => {
        try {
            if (authorField.value == '' || contentField.value == '') {
                return
            }
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    author: authorField.value.trim(),
                    content: contentField.value.trim()
                })
            })
            if (response.ok == false) {
                throw new Error('Error sending message')
            }
            let data = await response.json()
            authorField.value = ''
            contentField.value = '' 
        } catch (error) {
            alert(error.message)
        }
    })
    document.querySelector('[value="Refresh"]').addEventListener('click', async event => {
        let messagesArray = []
        try {
            let response = await fetch(url)
            if (response.ok == false) {
                throw new Error('Error viewing messages')
            }
            let data = await response.json()
            Object.values(data)
                .forEach(message => messagesArray.push(`${message.author}: ${message.content}`))
            messages.value = messagesArray.join('\n')
        } catch (error) {
            alert(error.message)
        }
    })
}
attachEvents()