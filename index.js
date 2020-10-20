class Polygon {
  constructor(array){
    this.array = array
    this.count = this.array.length
  }

  get countSides(){
    let sides = this.array.length
    return sides
  } 

  get perimeter(){
    let perimeter = 0;
    this.array.forEach(item => {
      perimeter += item
    })
    return perimeter
  }

}

class Triangle extends Polygon {
  get isValid(){
    if( this.count !== 3 ) return;
      let sideOne = this.array[0]
      let sideTwo = this.array[1]
      let sideThree = this.array[2]
      return ((sideOne + sideTwo > sideThree) && (sideThree + sideTwo > sideOne) && (sideThree + sideOne > sideTwo))
  }
}
class Square extends Polygon {
  get isValid(){
    if( this.count !== 4) return;
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]
    let side4 = this.array[3]
    return((side1 === side2)&&(side1 === side3)&&(side1 ===side4))
  }

  get area(){
    if(this.isValid){
      return this.array[0]*this.array[1]
    }
  }
}