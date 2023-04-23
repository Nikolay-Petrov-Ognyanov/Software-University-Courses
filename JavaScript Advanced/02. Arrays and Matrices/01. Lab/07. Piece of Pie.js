function solve(input, pie1, pie2) {
    let pies = []
    for (let i = input.indexOf(pie1); i <= input.indexOf(pie2); i++) {
        pies.push(input[i])
    }
    return pies
}
console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'))