function solve(input) {
    let age = Number(input[0])
    let washingMachinePrice = Number(input[1])
    let toyPrice = Number(input[2])
    let money = 0

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            money += toyPrice
        } else {
            money += i * 5
            money -= 1
        }
    }

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${(money - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice - money).toFixed(2)}`)
    }
}
solve(["21", 

"1570.98", 

"3"]) 