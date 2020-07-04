class Rectangle {
    constructor(h, w) {
        this.w = w;
        this.h = h;
        
    }
    
}


/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function() {

   if (this.w == undefined){
       return this.h **2
   }
   return this.h*this.w
}


/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

// class Square extends Rectangle {
//     constructor(h,w) {
//         super(h,w);
//     }
// }
class Square extends Rectangle {
    // only need one side to make a square
    constructor(s) {
        // super(s,s) = Rectangle constructor (h,w)
        super(s,s);
    }
}

let rec = new Rectangle(3,4)
let sqr = new Square(3)

 console.log(rec.area())
 console.log(sqr.area())
 