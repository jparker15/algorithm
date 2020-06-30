/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    
    // let recObj = {

    //     length:a,
    //     width: b,
    //     area: a*b,
    //     perimeter: 2*(a+b)

    // }
    
    // for (const key in recObj) {
    //     console.log(recObj[key]);
        
    // }
        
        this.length = a;
        this.width = b;
        this.area = a*b;
        this.perimeter = 2*(a+b);


    
}

Rectangle(5,5)