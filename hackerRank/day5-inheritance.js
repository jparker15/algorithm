class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        
    }
    
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.a = () =>{
    
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

 class Square extends Rectangle {
     constructor(w,h){
         super(w,h);
     }
 }