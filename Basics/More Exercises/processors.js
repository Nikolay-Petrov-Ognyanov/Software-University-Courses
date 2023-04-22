function processors(input) {

    let plannedProcessorsCount = Number(input[0])
    let workersCount = Number(input[1])
    let workdaysCount = Number(input[2])

    let processorPrice = 110.10

    let workHours = workersCount * workdaysCount * 8
    let processorsMade = Math.floor(workHours / 3)

    let processorsMadePrice = processorsMade * processorPrice
    let plannedProcessorPrice = plannedProcessorsCount * processorPrice

    if (processorsMade >= plannedProcessorsCount) {
        console.log(`Profit: -> ${(processorsMadePrice - plannedProcessorPrice).toFixed(2)} BGN`)
    } else {
        console.log(`Losses: -> ${(plannedProcessorPrice - processorsMadePrice).toFixed(2)} BGN`)
    }
}
processors(["150", "7", "18"])