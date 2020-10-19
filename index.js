// Your code here


class Polygon {

  constructor (sides){
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let sum = 0;

    for (const side of this.sides) {
      sum += side
    }
    return sum
  }

}

class Triangle extends Polygon {


  get isValid() {
    let one = this.sides[0]
    let two = this.sides[1]
    let three = this.sides[2]

    return (one + two > three && one + three > two && two + three > one)
  }
}

class Square extends Polygon {


  get isValid() {
    let one = this.sides[0]
    let two = this.sides[1]
    let three = this.sides[2]
    let four = this.sides[3]

    return (one === two && one === three && one === four)

  }

  get area() {
    return this.sides[0] * this.sides[0]
  }
}