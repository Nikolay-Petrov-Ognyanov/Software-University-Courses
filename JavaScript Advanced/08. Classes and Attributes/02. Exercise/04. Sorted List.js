class List {
    constructor() {
        this.arr = []
        this.size = this.arr.length
    }
    add(element) {
        this.arr.push(element)
        this.arr = this.arr.sort((a, b) => a - b)
        this.size = this.arr.length
    }
    remove(index) {
        if (this.arr[index] !== undefined) {
            this.arr.splice(index, 1)
        }
        this.arr = this.arr.sort((a, b) => a - b)
        this.size = this.arr.length
    }
    get(index) {
        if (this.arr[index] !== undefined) {
            return this.arr[index]
        }
        this.arr = this.arr.sort((a, b) => a - b)
        this.size = this.arr.length
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
