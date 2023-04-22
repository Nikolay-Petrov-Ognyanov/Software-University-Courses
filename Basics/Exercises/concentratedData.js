function concentrateData(input){
    let firstName = (input[0])
    let familyName = (input[1])
    let age = (input[2])
    let city = (input[3])
    console.log(`You are ${firstName} ${familyName}, a ${age}-years old person from ${city}.`)
}
concentrateData([`Maria`, `Ivanova`, 20, `Sofia`])