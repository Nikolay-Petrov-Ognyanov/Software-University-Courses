function equal_sums_even_odd_position(input) {
    let result = []

    for (let i = Number(input[0]); i <= Number(input[1]); i++) {
        i = i.toString().split("")
        let even = 0
        let odd = 0

        for (let j = 0; j < i.length; j++) {
            if (j % 2 == 0) {
                even += Number(i[j])
            } else {
                odd += Number(i[j])
            }

        }

        i = Number(i.join(""))

        if (even == odd) {
            result.push(i)
        }
    }

    console.log(result.join(" "))
}

equal_sums_even_odd_position(["100000", "100050"]) 