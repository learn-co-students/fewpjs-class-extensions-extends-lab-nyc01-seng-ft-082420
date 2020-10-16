// Your code here
class Polygon {
  constructor(integers) {
    this.integers = integers
  }

  get countSides() {
    return this.integers.length
  }

  get perimeter() {
    return this.integers.reduce((total, current) => (total + current))
  }
}

class Triangle extends Polygon {
  
  get isValid() {
    const side1 = this.integers[0]
    const side2 = this.integers[1]
    const side3 = this.integers[2]

    return (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)
  }

}

class Square extends Polygon {

  get isValid() {
    const side1 = this.integers[0]
    const side2 = this.integers[1]
    const side3 = this.integers[2]
    const side4 = this.integers[3]

    return (side1 === side2 && side1 === side3 && side1 === side4)
  }

  get area() {
    return this.integers[0] ** 2
  }

}