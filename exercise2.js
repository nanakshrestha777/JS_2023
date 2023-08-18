
//Create a Variable number type stirng and try to add a number to it.

var a1 = 1500
console.log(a1)

console.log('we can add var (type string)')
// or can use let const also 
var b = "2000";
var result = parseInt(b) + a1 ;
console.log(result)


// another example 
var a = "1500";
var b = 500;
var result = +a + b;

console.log(result); // Output: 2000\


// Use type of operator to find the data type of the string...
var dataType = typeof a;
console.log(dataType);


var a = 1
var dataType =  typeof a;
console.log('This is ', dataType, 'data type.');






// Create a const object in javascript. Can you change it to hold a number later

// const myconst =  "hello world"
// myconst = 123;
/// this will give an error as we are trying to reassign value to constant variable but in var 

// Trying to add a new key to the const object 


const myconst1 = {
    key1 : 'Hello world'
};

myconst1.key2= 123;
console.log(myconst1)


