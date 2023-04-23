function solve() {
    document.getElementById("btnSend").addEventListener("click", (event) => {
        let bestRestaurantsParagraph = document.getElementsByTagName("p")[0]
        let bestRestaurantsWorkersParagraph = document.getElementsByTagName("p")[1]
        let listOfRestaurants = {}
        let input = JSON.parse(document.getElementsByTagName("textarea")[0].value)

        for (let line of input) {
            let [restaurantsName, workersAndSalaries] = line.split(" - ")

            if (listOfRestaurants.hasOwnProperty(restaurantsName) == false) {
                listOfRestaurants[restaurantsName] = {}
                workersAndSalaries = workersAndSalaries.split(", ")

                for (let workerAndSalary of workersAndSalaries) {
                    let [worker, salary] = workerAndSalary.split(" ")
                    salary = Number(salary)
                    listOfRestaurants[restaurantsName][worker] = salary
                }
            }
        }

        for (let restaurantsName in listOfRestaurants) {
            let salariesArray = Array.from(Object.values(listOfRestaurants[restaurantsName]))
                .sort((a, b) => b - a)
            let totalOfSalaries = 0

            for (let salary of salariesArray) {
                totalOfSalaries += salary
            }

            let averageSalary = totalOfSalaries / salariesArray.length
            listOfRestaurants[restaurantsName].averageSalary = averageSalary.toFixed(2)
            listOfRestaurants[restaurantsName].bestSalary = salariesArray[0].toFixed(2)
        }

        let bestRestaurant = undefined

        for (let restaurantsName in listOfRestaurants) {
            if (bestRestaurant == undefined) {
                bestRestaurant = (listOfRestaurants[restaurantsName].averageSalary)
            } else {
                if (listOfRestaurants[restaurantsName].averageSalary > bestRestaurant) {
                    bestRestaurant = { [restaurantsName]: listOfRestaurants[restaurantsName] }
                }
            }
        }

        for (let name in bestRestaurant) {
            let averageSalary = bestRestaurant[name].averageSalary
            let bestSalary = bestRestaurant[name].bestSalary
            let workerAndSalary = bestRestaurant[name]
            bestRestaurantsParagraph.textContent =
                `Name: ${name} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`
            delete bestRestaurant[name].averageSalary
            delete bestRestaurant[name].bestSalary
            let stringOfWorkers = ``

            for (let worker in workerAndSalary) {
                let salary = workerAndSalary[worker]
                stringOfWorkers += `Name: ${worker} With Salary: ${salary}` + '\n'
            }
            
            stringOfWorkers = stringOfWorkers
            bestRestaurantsWorkersParagraph.textContent = stringOfWorkers
        }
    })
}