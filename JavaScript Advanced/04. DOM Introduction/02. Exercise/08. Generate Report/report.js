function generateReport() {
    let tbody = document.querySelector('tbody')
    let rows = tbody.querySelectorAll('tr')
    let arr = []

    for (let row of rows) {
        let obj = {}
        let checkboxes = document.querySelectorAll('[type="checkbox"]')
        let cells = row.querySelectorAll('td')

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                obj[checkboxes[i].name] = cells[i].textContent
            }
        }

        arr.push(obj)
    }

    document.getElementById('output').value = JSON.stringify(arr)
}