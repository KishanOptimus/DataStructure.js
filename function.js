// Function is a block of code that perfroms spacific task.
// Suppose you nee to create a program to create a circle and color it.
//   you can crete two functions to slove this problem:
//  * A function draw a circle and color it.
//   A funtion can declare using a Function keyword 

function createCircle(){
    console.log('drawing a circle');
}
createCircle();

function colorCircles(){
    console.log('color of circle is red');
}
// calling the function 
colorCircles();

// Functions Parameters

function add(a,b){
    console.log(a+b);
}
add(2,5);
add(6,7);

// function defalut parameters

function sum(x=3, y=5){
    return x+y;
}
let result = sum(5,15);
console.log(`Sum of 5 and 15: ${result}`);
// pass arguments of x not a y
result = sum (7);
console.log(`sum of 7 and default value (5): ${result}`);
// pass no arguments
// use defalut values of x and y
result = sum()
console.log(`Sum of default value (3 and 5): ${result}`);


// Funtion setinterval

