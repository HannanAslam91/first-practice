//!program to display param value in console.log
// function greeeting(params) {
//     console.log("greeting");
//     console.log(params);
    
// }

//! second program to convert variable datatype and sum 

// function operation(secondInteger,secondDecimal,secondString) {
//     const firstInteger=5;
//     const firstDecimal=2.3;
//     const firstString="Hannan";
//     console.log(firstInteger+Number(secondInteger));
//     console.log(firstDecimal+Number(secondDecimal));
//     console.log(firstString.concat(secondString));
// }
// operation(5,3," Aslam")

//!Third calculate the area of rectangular and prameters
// function calculate(lenght,widht){
//     let area;
//     area= lenght * widht;
//     return console.log(area);
//     ;
// }
// calculate(10,20)

// function prameters(lenght,widht){
//     let prameters;
//     prameters=2*(lenght+widht)
//     return console.log(prameters);
    
// }
// prameters(2,2)

//! 4 program 
// function fraction(n){
//     if(n<2){
//         return console.log(1);
//     }
//     return console.log(n*(n-1));
    
// }
// fraction(4)

//!Let and const program
const PI=Math.PI
console.log(PI);
let r= parseFloat(readLine());
console.log(r);

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    let r = parseFloat(readLine());
    // Print the area of the circle:
    let area = PI * Math.pow(r,2);
    console.log(area);
    
    // Print the perimeter of the circle:
    var perimeter = 2 * PI * r;
    console.log(perimeter);
}

