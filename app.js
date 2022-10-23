class Shape {

    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        let perimeter = this.sides * this.sideLength;
        console.log(perimeter)
    }

}
let square = new Shape ("Square", 4, 5);
let triangle = new Shape ("Triangle", 3, 3);

console.log(square)
square.calcPerimeter();
console.log(triangle)
triangle.calcPerimeter();
