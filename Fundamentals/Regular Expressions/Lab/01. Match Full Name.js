function solve(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g
    let match = pattern.exec(names)
    let validNames = []
    while (match !== null) {
        validNames.push(match[0])
        match = pattern.exec(names)
    }
    console.log(validNames.join(' '))
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")