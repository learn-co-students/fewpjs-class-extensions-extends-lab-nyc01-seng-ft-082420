class Polygon{
  constructor(nums){
    this.nums = nums
  }

  get countSides(){
    return this.nums.length
  }

  get perimeter(){
    return this.nums.reduce((a,b) => a + b)
  }

}

class Triangle extends Polygon {
  constructor(nums){
    super(nums)
    this.nums = nums
  }
  get isValid(){
    const hyp = Math.max(...this.nums)
    const sum = this.nums.reduce((a,b) => a + b)
    if((sum-hyp) > hyp && this.countSides === 3){
      return true
    }else {
      return false
    }
  }
}

class Square extends Polygon {
  constructor(nums){
    super(nums)
    this.nums = nums
  }

  get isValid(){
    if (!Array.isArray(this.nums)) return;
    if (this.countSides !== 4) return;
    let side1 = this.nums[0]
    let side2 = this.nums[1]
    let side3 = this.nums[2]
    let side4 = this.nums[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }

  get area(){
    return this.nums[0]**2
  }
}
