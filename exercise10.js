//practice set array


//1. create an array of numbers and take input from the  user to add numebrs to this array.
const prompt = require("prompt-sync")({ sigint: true });


// Create an array of numbers
let array = [1, 2, 3, 4, 5];

// Prompt the user to enter numbers until they enter 0 to stop
let num = prompt('Enter the number (enter 0 to stop): ');

while (num !== '0') {
    num = parseInt(num);
    array.push(num);
    num = prompt('Enter the number (enter 0 to stop): ');
    console.log('Updated Array:', array);
}



//2. Keep adding to add numbers to the array in 1 intil 0 is added to the arry.
//3. Filter for numebrs divisible by 10 from a given array.
//4.Create an array of square of given numbers.
//5. Use reduce to calculate factoria of a given numbers from an array for first n natural numbers.( n being the numbers whose factorial needs to be calculated.)