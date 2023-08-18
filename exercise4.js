//   1. IF STATEMENT 

/*
if (condition) {
    execute this code
};

*/


// 2. IF ELSE STATEMENT
/* 
if (condition) {
    execude this code ,if condition is true
}
else{
    //block of code if condition is false
};
*/


/* 3. If else If statement
    SOmetimes we might want to keep rechecking until the conditions matches. So we use if else if for achieving this.

    SYntax..
if (age>0){
    console.log('A valid age')
}
else if (age > 10 && age < 15) {
    console.log('But you are a kid')'
    
}
else if (age >18) {
    console.log('not a kid');

}
else {
    console.log ('Invalid age')

}


*/

// some pratice questions

// use logical operators to find whether the age of a person lise between 10 and 20.


var age = 20;

if (age >10 & age < 20 ){
    console.log('lies between 10 and 20');
}
else{
    console.log('doesnot lie betwen 10 and 20');
}




// demonstrate the use of switch case statements?

/*
syntax
switch (expression) {
  case value1:
    // Code to be executed when expression matches value1
    break;
  case value2:
    // Code to be executed when expression matches value2
    break;
  // Additional cases...
  default:
    // Code to be executed when expression doesn't match any case
    break;
}
 */


var numbers = 4;
var numbers = 1;
switch (numbers){
    case 1:
        console.log('This is number one.');
        break;
    case 2:
        console.log('This is number 2.');
        break;
    case 3:
        console.log('This is number 3.');
    default:
        console.log('invalid');
        break;
};




// write a javascript program to find whether a number id divisible by 2 and 3.?

var numberchecker = 6 ;

if (numberchecker % 2 === 0 && numberchecker % 3 === 0){
    console.log( numberchecker, 'is divisible by 2 and 3');
}
else {
    console.log(numberchecker, 'is not divisible by 2 and 3');
}




var number = 200;

if (number % 2 === 0){
    console.log(number, 'is divided by 2.');
    
}
else if (number % 3 === 0){
    console.log(number, 'is divisible by 3.');

}
else {
    console.log(number, 'is neither divisible by 2 and 3.')
}



//write a javascript program to find whether a number is divisible by either 2 and 3.

/* suntax:
condition ? expression1 : expression2

*/



//print " you can drive" or "You cannot drive" based on age being greater than 18 using ternary operator.

var age = 25;
var check = age > 18 ?'you can drive.' : age<18 ? 'you cannot drive.' : ' you can learn drive';
console.log(age,check);