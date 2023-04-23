class Rectangle {
    constructor(height, width, color) {
        this.height = height
        this.width = width
        this.color = color
    }
    calcArea() {
        let area = this.height * this.width
        return Number(area)
    }
}
let rect = new Rectangle(4, 5, 'Red')
console.log(rect.width)
console.log(rect.height)
console.log(rect.color)
console.log(rect.calcArea())
