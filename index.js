class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray
    this.count = sidesArray.length
  }

  get countSides(){
    return this.sidesArray.length
  }

  get perimeter(){
    let perim = 0
    let sides = this.sidesArray
    for (var side of sides) {
      perim += side
    }
    return perim
  }

}

class Triangle extends Polygon {
  get isValid() {
    let side1 = this.sidesArray[0]
    let side2 = this.sidesArray[1]
    let side3 = this.sidesArray[2]
    if (side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2) {
      return true
    } else {
      return false
    }

  }
}

class Square extends Polygon {
  get area(){
    return this.sidesArray[0] * this.sidesArray[1]
  }

  get isValid(){
    if (this.sidesArray[0] === this.sidesArray[1] && this.sidesArray[0] === this.sidesArray[2] && this.sidesArray[0] === this.sidesArray[3]) {
      return true
    } else {
      return false
    }
  }
}
