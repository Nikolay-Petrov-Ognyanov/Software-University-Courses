function operationsBetweenNumbers(input) {
    let N1 = Number(input[0])
    let N2 = Number(input[1])
    let operator = input[2]

    let result
    let evenOrOdd

    if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`)
    }
    else {
        switch (operator) {
            case `+`:
                result = N1 + N2
                if (result % 2 === 0) {
                    evenOrOdd = `even`
                    console.log(`${N1} + ${N2} = ${result} - ${evenOrOdd}`)
                } else {
                    evenOrOdd = `odd`
                    console.log(`${N1} + ${N2} = ${result} - ${evenOrOdd}`)
                }
                ; break
            case `-`:
                result = N1 - N2
                if (result % 2 === 0) {
                    evenOrOdd = `even`
                    console.log(`${N1} - ${N2} = ${result} - ${evenOrOdd}`)
                } else {
                    evenOrOdd = `odd`
                    console.log(`${N1} - ${N2} = ${result} - ${evenOrOdd}`)
                }
                ; break
            case `*`:
                result = N1 * N2
                if (result % 2 === 0) {
                    evenOrOdd = `even`
                    console.log(`${N1} * ${N2} = ${result} - ${evenOrOdd}`)
                } else {
                    evenOrOdd = `odd`
                    console.log(`${N1} * ${N2} = ${result} - ${evenOrOdd}`)
                }
                ; break
            case `/`:
                result = N1 / N2
                console.log(`${N1} / ${N2} = ${result.toFixed(2)}`)
                    ; break
            case `%`:
                result = N1 % N2
                console.log(`${N1} % ${N2} = ${result}`)
        }
    }
}
operationsBetweenNumbers(["10",
    "0",
    "%"])