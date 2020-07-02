/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(side){
       //console.log("side:",side);
       this.demo = side;
    }
    perimeter(){
        let test = this.demo,
            total = 0;

            for (let i = 0; i < test.length; i++) {
               
                total += test[i]
                
            }
            return total
            
    }
   
}




const rectangle = new Polygon([10, 20, 10, 20]);
// const square = new Polygon([10, 10, 10, 10]);
// const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
// console.log(square.perimeter());
// console.log(pentagon.perimeter());