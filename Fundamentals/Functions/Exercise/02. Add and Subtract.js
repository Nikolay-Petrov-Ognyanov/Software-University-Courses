function addAndSubtract(num1, num2, num3) {
    let add = (num1, num2) => num1 + num2
    let addresult = add(num1, num2)
    let subtract = (addresult, num3) => (addresult - num3)
    let subtractresult = subtract(addresult, num3)
    console.log(subtractresult)
}
addAndSubtract(42,
    58,
    100
    )