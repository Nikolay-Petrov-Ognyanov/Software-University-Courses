function number_pyramid(input) {
    input = input[0] * 1

    let arr = []

    for (let i = 1; i <= input; i++) {
        arr.push(i)
    }

    let counter = 1

    while (arr.length != 0) {
        console.log(arr.splice(0, counter).join(" "))
        counter++
    }
}

number_pyramid(["7"])