function solve(one, two, three) {
    if (one >= two && two >= three) {
        console.log(one)
        console.log(two)
        console.log(three)
    } else if (one >= three && three >= two) {
        console.log(one)
        console.log(three)
        console.log(two)
    } else if (two >= one && one >= three) {
        console.log(two)
        console.log(one)
        console.log(three)
    } else if (two >= three && three >= one) {
        console.log(two)
        console.log(three)
        console.log(one)
    } else if (three >= one && one >= two) {
        console.log(three)
        console.log(one)
        console.log(two)
    } else if (three >= two && two >= one) {
        console.log(three)
        console.log(two)
        console.log(one)
    }
}
solve(0, 0, 2)