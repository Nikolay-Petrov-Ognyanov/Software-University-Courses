function rectangle(width, height, color) {
    color = color.split('')
    color[0] = color[0].toUpperCase()
    color = color.join('')
    let obj = {
        width,
        height,
        color,
        calcArea: () => width * height
    }
    return obj
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());