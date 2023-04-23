function solve(input) {
    let pattern = /(?<s1>[/=])[A-Z][A-Za-z]{2,}\1/g
    let match = pattern.exec(input)
    let arr = []
    while (match !== null) {
        arr.push(match[0])
        match = pattern.exec(input)
    }
    let newarr = []
    let travelpoints = 0
    for (let entry of arr) {
        entry = entry.replace("=", "").replace("=", "")
        entry = entry.replace("/", "").replace("/", "")
        newarr.push(entry)
        travelpoints += entry.length
    }
    console.log(`Destinations: ${newarr.join(", ")}`)
    console.log(`Travel Points: ${travelpoints}`)
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")