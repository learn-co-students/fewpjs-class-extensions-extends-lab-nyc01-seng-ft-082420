class Polygon{
  constructor(array){
    this.array = array
    this.count = this.array.length
  }

  get countSides(){
    return this.array.length
  }

  get perimeter(){
    let total = 0
    for (const i of this.array){
      total += i
    }
    return total
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.count !== 3) return
    let one  = this.array[0]
    let two  = this.array[1]
    let three  = this.array[2]
    return ((one + two > three) && (one + three > two) && (two + three > one))
  }
}


class Square  extends Polygon{
  get isValid(){
    if(this.count !== 4) return

    let one  = this.array[0]
    let two  = this.array[1]
    let three  = this.array[2]
    let four = this.array[3]

    return((one == two) && (three == four) && (two == three))
  }
  get area(){
    if(this.count !== 4) return
    let one  = this.array[0]
    let two  = this.array[1]
    return (one *two)
  }
}
