function projectsCreation(input){
let name = input[0]
let projectsCount = input[1]
let workingHours = projectsCount * 3
console.log(`The architect ${name} will need ${workingHours} hours to complete ${projectsCount} project/s.`)
}
projectsCreation(["Sanya",
"9"]
)