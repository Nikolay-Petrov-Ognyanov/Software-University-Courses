function solve(num) {
    let result = 0
    let numAsString = String(num)

    for (i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i])
    }

    let resultAsString = String(result)
    let special = false

    for (i = 0; i < resultAsString.length; i++) {
        if (resultAsString[i] === `9`) {
            special = true
        }
    }

    console.log(`${num} Amazing? ${special ? `True` : `False`}`)
}
solve(1233)