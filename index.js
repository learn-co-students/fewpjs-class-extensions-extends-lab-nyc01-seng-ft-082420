// Your code here

class Polygon {

    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        let count = 0
        for (let i = 0; i<this.array.length; i++) {
            
           count += this.array[i] 

        }
        return count
    }
}

class Triangle extends Polygon {
    

    get isValid() {
        let pairOne = this.array[0] + this.array [1]
        let pairTwo = this.array[1] + this.array [2]
        let pairThree = this.array[0] + this.array[2]

        let sideOne, sideTwo, sideThree;
        
        

        if (this.array[0] < pairOne && this.array[0] < pairTwo && this.array[0] < pairThree) {
            let sideOne = true 
        } else {
            let sideOne = false
            alert("cannot make a triangle instance!")
        }
            
        if (this.array[1] < pairOne && this.array[1] < pairTwo && this.array[1] < pairThree) {
            let sideTwo = true
        } else {
            let sideTwo = false
            alert("cannot make a triangle instance!")
        }

        if (this.array[1] < pairOne && this.array[1] < pairTwo && this.array[1] < pairThree) {
            let sideThree = true
        } else {
            let sideThree = false
            alert("cannot make a triangle instance!")
        }

        if (sideOne && sideTwo && sideThree) {
            return "you have a great triangle bud"
        } else {
            return "back to the drawing board bud"
        }
    }
}