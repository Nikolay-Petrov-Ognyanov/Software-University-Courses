function solve(input) {
    let commands = {
        functionPlus: (n1Plus, n2Plus) => {
            console.log(n1Plus + n2Plus)
        }
        ,
        functionMinus: (n1Minus, n2Minus) => {
            console.log(n1Minus - n2Minus)
        }
        ,
        functionMultiply: (n1Multiply, n2Multiply) => {
            console.log(n1Multiply * n2Multiply)
        }
        ,
        functionDivide: (n1Divide, n2Divide) => {
            console.log(n1Divide / n2Divide)
        }
    }
    for (let line of input) {
        let [command, n1, n2] = line.split(' ')
        n1 = +n1
        n2 = +n2
        commands[command](n1, n2)
    }
}
solve([
    'functionPlus 3 3',
    'functionMinus 3 3',
    'functionMultiply 3 3',
    'functionDivide 3 3',
])