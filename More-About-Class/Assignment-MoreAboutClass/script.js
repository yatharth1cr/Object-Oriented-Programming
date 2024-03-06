class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }
  description() {
    alert(`The square is ${this.width} * ${this.height}`);
  }
  calcArea() {
    const area = this.width * this.width;
    return `${area}`;
  }
}

let sq1 = new Square(10);
console.log(sq1);
// sq1.description();
sq1.calcArea();
