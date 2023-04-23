function solve(x1, y1, x2, y2) {
    let dx = x1 - x2
    let dy = y1 - y2

    let result = Math.sqrt(dx * dx + dy * dy)
    console.log(result.toFixed(1))
}
solve(
    -4, -12,
    -6, -19
)