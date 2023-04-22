function sums_prime_non_prime(input) {
    let prime = 0
    let non_prime = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "stop") {
            break
        }

        let n = Number(input[i])

        if (n < 0) {
            console.log(`Number is negative.`)
        } else {
            prime += n

            let counter = 2

            while (counter < n) {
                if (Number.isInteger(n / counter)) {
                    non_prime += n
                    prime -= n
                    break
                }

                counter++
            }
        }
    }

    console.log(`Sum of all prime numbers is: ${prime}`)
    console.log(`Sum of all non prime numbers is: ${non_prime}`)
}

sums_prime_non_prime(["3", 

"9", 

"0", 

"7", 

"19", 

"4", 

"stop"])