/* Some Extra Pratice questions. */

// PRINT NUMBERS: Write a program that uses a for loop to print numbers from 1 to 10.


var i = 1;

for (i = 1; i<11; i ++){
  console.log('Printed numbers: ', i );
};



//Sum of Array: Write a program that calculates and prints the sum of all numbers in an array using a for loop.


let sum = [1,2,3,4,5];
let add = 0;
for ( i = 0; i < sum.length; i++) {
    add += sum[i];

}
console.log('Sum of all numbers: ',add );



//Counting Even Numbers: Write a program that counts and prints the number of even numbers between 1 and 50 using a for loop.



let count = 0;

for (i =1; i <= 50; i++) {
    if(i % 2=== 0){
        count++
    }
}
console.log("Counted even numbers: ", count)


//Reverse Array: Write a program that takes an array of numbers and prints them in reverse order using a for loop.


let a = [1,2,3,4,5];
let reversed_array = [];
for (let i = a.length -1; i >= 0; i--){
    reversed_array.push(a[i]);
} 
console.log('reversed array: ', reversed_array);


// Multiplication Table: Write a program that generates and prints the multiplication table (up to 10) using nested for loops.


for (i = 1; i <= 10; i ++){
    for (j = 1; j <= 10; j++){
        let product = i * j;
        console.log(`${i} x ${j} = ${product}`);
    }
};


//self practice
for (i = 1; i <=2; i++){
    for(j = 1; j <=10; j ++){
        let multi = i * j;
        console.log(`${i} * ${j} = ${multi}`)
    }
}




// Factorial: Write a program that calculates and prints the factorial of a given number using a for loop.

let no = 5
let factorial = 1;

for (let i = no; i >= 1; i--){
    factorial *= i;
}
console.log(`Factorial of ${no} is ${factorial} `)


// for example:
const numpy = 10
let z = 1;
for (let numpy = i; i >= 1; i--){
    z *= i;

    
}
console.log(`the factorial number of ${i} is ${z}`)


// Counting Characters: Write a program that counts and prints the number of occurrences of a specific character in a given string using a for loop.

// Fibonacci Sequence: Write a program that generates and prints the Fibonacci sequence up to a specified number of terms using a for loop.

// Pattern Printing: Write a program that prints a pattern, such as a triangle or a pyramid, using for loops to control the structure and repetition.

// Prime Numbers: Write a program that checks and prints all prime numbers between 1 and 100 using a for loop. 