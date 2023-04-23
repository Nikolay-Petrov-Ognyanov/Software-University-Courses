function attachEvents() {
let commentsURL = `http://localhost:3030/jsonstore/blog/comments`
document.getElementById("btnLoadPosts").addEventListener("click", async function loadPosts(event) {
    try {
        let response = await fetch(`http://localhost:3030/jsonstore/blog/posts`)
        if (response.ok == false) {
            throw new Error(response.status)
        }
        let data = await response.json()
        console.log(data)
    } catch (error) {
        alert (error.message)
    }
})
let view = document.getElementById("btnViewPost")


}

attachEvents();