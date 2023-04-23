function solve() {
    let infoElement = document.getElementById("info")
    let arriveButton = document.getElementById("arrive")
    let departButton = document.getElementById("depart")

    let busStop = {
        next: "depot"
    }

    function depart() {
        departButton.disabled = true
        arriveButton.disabled = false

        let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            busStop = JSON.parse(JSON.stringify(data))
            infoElement.textContent = `Next stop ${busStop.name}`
        })
        .catch(error => console.log(error))
    }

    function arrive() {
        departButton.disabled = false
        arriveButton.disabled = true

        infoElement.textContent = `Arriving at ${busStop.name}`
    }

    return {
        depart,
        arrive
    }
}

let result = solve()