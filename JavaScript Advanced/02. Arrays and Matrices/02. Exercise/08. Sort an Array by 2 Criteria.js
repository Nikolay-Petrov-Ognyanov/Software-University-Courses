function solve(input) {
    input.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length)
    console.log(input.join('\n'))
    console.log(input.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length).join('\n'))
}
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])