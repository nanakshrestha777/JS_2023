//Pratice set of STRINGS



// Explore the includes, startswith & endswith funcitons of a string

const str = 'Hello, world!';
console.log(str.startsWith('world',4));
//This is print False because it doesnot start with index 4

console.log(str.startsWith('world',7));
// This will return true as we are passing in an argument that starts from index number seven and ends.


//Write a program to convert a given string to lowercase.

console.log('COUNTRY'.toLowerCase());


//Extract the amount of this string.?


const string = "please give rs 5000";
const amount = string.match(/\d+/)[0];
console.log(amount);


//exercise 1
//Write a program that takes a string as input and prints each character of the  string on a new line.
