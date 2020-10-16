// Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
// Use the get keyword to make a getter method area that calculates the area of the square.


class Polygon {
    constructor (sides){
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        if (!Array.isArray(this.sides)) return;
        else {
            let total = 0;
                for (let int of this.sides){
                    total += int
                }
                return total
            }
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (!Array.isArray(this.sides)){
            return "Error!"
        } else {
            let side1 = this.sides[0];
            let side2 = this.sides[1];
            let side3 = this.sides[2];
            return ((side1 + side2 > side3) && (side1 < side2 + side3) && (side1 + side3 > side2))
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if (!Array.isArray(this.sides)){
            return "Error!"
        } else {
            let side1 = this.sides[0];
            let side2 = this.sides[1];
            let side3 = this.sides[2];
            let side4 = this.sides[3];
            return ((side1 === side2) && (side2 === side3) && (side3 === side4))
        }
    }

    get area(){
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 4) return;
        else {
            return this.sides[0] * this.sides[0]
        }
    }
}