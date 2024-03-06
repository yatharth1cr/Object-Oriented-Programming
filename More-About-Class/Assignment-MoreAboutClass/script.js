class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
  }

  get description() {
    alert(`The square is ${this.width * this.height}`);
  }

  get calcArea() {
    const area = this.width * this.width;
    return `${area}`;
  }

  set area(areaSquare) {
    const calculatedArea = this.width * this.width;
    if (calculatedArea !== areaSquare) {
      console.log("Not a valid input");
    } else {
      const side = Math.sqrt(areaSquare);
      this.width = `${side}`;
      this.height = `${side}`;
    }
  }
  static isEqual(a, b) {
    return a.calcArea === b.calcArea;
  }
}

let sqr1 = new Square(4);
let sqr2 = new Square(4);
console.log(sqr1);
console.log(sqr2);
console.log(Square.isEqual(sqr1, sqr2));
