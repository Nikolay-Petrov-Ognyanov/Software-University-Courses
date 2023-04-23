function solve(r, h) {
    let v = (1 / 3) * Math.PI * r * r * h
    let s = Math.sqrt(r * r + h * h)
    let l = Math.PI * r * s
    let b = Math.PI * r * r
    let a = l + b
    console.log(`volume = ${v.toFixed(4)}`)
    console.log(`area = ${a.toFixed(4)}`)
}
solve(3.3,
    7.8
)