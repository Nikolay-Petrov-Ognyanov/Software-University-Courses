function jansNotation(input) {
    let numbers = []
    let operators = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] === Number(input[i])) {
            numbers.push(input[i])
        } else {
            operators.push(input[i])
        }
    }
    if (numbers.length > operators.length + 1) {
        console.log("Error: too many operands!")
    } else if (numbers.length < operators.length + 1) {
        console.log("Error: not enough operands!")
    } else {
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case '+':
                    input.splice(i - 2, 3, input[i - 2] + input[i - 1])
                    i = 0
                    break
                case '-':
                    input.splice(i - 2, 3, input[i - 2] - input[i - 1])
                    i = 0
                    break
                case '*':
                    input.splice(i - 2, 3, input[i - 2] * input[i - 1])
                    i = 0
                    break
                case '/':
                    input.splice(i - 2, 3, input[i - 2] / input[i - 1])
                    i = 0
                    break
            }
        }
        console.log(input.join(" "))
    }
}
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/'])