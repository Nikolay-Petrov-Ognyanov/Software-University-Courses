function solve(products) {
    let sorted = products.sort()
    for (i = 0; i < sorted.length; i++) {
        console.log(`${Number(i + 1)}.${sorted[i]}`);
    }
}
solve(['Watermelon', 'Banana', 'Apples'])