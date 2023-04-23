async function loadCommits() {
    let username = document.getElementById("username").value
    let repo = document.getElementById("repo").value
    let list = document.getElementById("commits")
    let url = `https://api.github.com/repos/${username}/${repo}/commits`

    try {
        let response = await fetch(url)

        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`)
        }

        let data = await response.json()

        list.innerHTML = ""

        for (let { commit } of data) {
            list.innerHTML += `<li>${commit.author.name}: ${commit.message}</li>`
        }

    } catch (error) {
        list.innerHTML = `Error: ${error.message} `
    }
}