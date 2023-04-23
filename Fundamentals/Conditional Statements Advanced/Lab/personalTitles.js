function personalTitles(input) {

    let age = Number(input[0])
    let sex = input[1]
    let title = input[2]
    
    if (sex === `f`) {
        if(age >= 16) {
            console.log(`Ms.`)
        } else {
            console.log(`Miss`)
        }
    }

    if (sex === `m`) {
        if(age >= 16) {
            console.log(`Mr.`)
        } else {
            console.log(`Master`)
        }
    }
}
personalTitles(["17",
"m"])
