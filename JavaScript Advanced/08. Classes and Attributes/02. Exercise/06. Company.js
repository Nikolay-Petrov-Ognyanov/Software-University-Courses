class Company {
    constructor() {
        this.departments = {}
    }
    addEmployee(name, salary, position, department) {
        if (name === '' || name == undefined || name === null ||
            salary === '' || salary == undefined || salary === null ||
            position === '' || position == undefined || position === null ||
            department === '' || department == undefined || department === null) {
            throw new Error("Invalid input!")
        }
        if (salary < 0) {
            throw new Error("Invalid input!")
        }
        if (this.departments.hasOwnProperty(department) === false) {
            this.departments[department] = []
        }
        this.departments[department].push({
            name,
            salary,
            position
        })
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        let departmentsArray = Array.from(Object.entries(this.departments))
        let sortDepartments = {}
        for (let [departmentsName, employeesList] of departmentsArray) {
            let totalSalary = 0
            let employeesCount = employeesList.length
            for (let employee of employeesList) {
                totalSalary += employee.salary
            }
            let averageSalary = (totalSalary / employeesCount).toFixed(2)
            sortDepartments[departmentsName] = averageSalary
        }
        let sortableDepartments = []
        for (let department in sortDepartments) {
            sortableDepartments.push([department, sortDepartments[department]])
        }
        let sortedDepartments = sortableDepartments.sort((a, b) => b[1] - a[1])
        let resultArray = []
        let bestDepartmentsName = sortedDepartments[0][0]
        resultArray.push(`Best Department is: ${bestDepartmentsName}`)
        let bestDerpartmentsAverageSalary = sortedDepartments[0][1]
        resultArray.push(`Average salary: ${bestDerpartmentsAverageSalary}`)
        let bestDepartment = this.departments[bestDepartmentsName].sort((a, b) => b.salary - a.salary)
        for (let employee of bestDepartment) {
            resultArray.push(`${employee.name} ${employee.salary.toFixed(2)} ${employee.position}`)
        }
        return resultArray.join('\n')
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
