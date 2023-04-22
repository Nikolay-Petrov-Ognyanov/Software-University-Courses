function depositCalculator(input){
    let depositSum = Number(input[0])
    let depositTerm = Number(input[1])
    let interestPercentage = Number(input[2] * 0.01)
    let sum = depositSum + depositTerm * ((depositSum * interestPercentage) / 12)
    console.log(sum)
}
depositCalculator(["2350","6","7"])