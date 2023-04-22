function substitute(input) {
    let K = Number(input[0])
    let L = Number(input[1])
    let M = Number(input[2])
    let N = Number(input[3])

    let counter = 0

    for (let k = K; k <= 9; k++) {
        for (let l = 9; l >= L; l--) {
            for (let m = M; m <= 8; m++) {
                for (let n = 9; n >= N; n--) {
                    if (k % 2 === 0 && l % 2 !== 0 && m % 2 === 0 && n % 2 !== 0 && counter < 6) {
                        if (k === m && l === n) {
                            console.log(`Cannot change the same player.`)
                        } else {
                            console.log(`${k}${l} - ${m}${n}`)
                            
                            counter++
                        }
                    }
                }
            }
        }
    }
}

substitute(["6",
    "7",
    "5",
    "6"])