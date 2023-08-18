//Strings
/* To store text....
Syntax- 
*/
let name = 'Nanak'; // Creates a string

let char = typeof name;
console.log(char);   //OUTPUT - String

// This following ( name.lenght) prints lenght of the string.
console.log(name.length);


///Strings can created using single quotes or double quotes, it doesn't matter.

var str = 'using Single Quotes';

//Here I have reassign a new sentence on same variable named str.
str ='string with Double Quotes';
console.log(str);



//Template literals provide a convenient and flexible way to work with strings in JavaScript.


let user = `The name "is" Nanak's`;

console.log(user);


var person = 'one';
// Now we can insert variable directly in template literal which is called string interpolation.
let a = `This is my name ${person}.`;
console.log(a);



//Escape Sequence Characters__

//Similaryly we can use single quote escape sequence to solve the problem.

/*
\n = Newline
\t = Tab
\r = carriage Return
 */


//Strings properties and Methods..
let country = "Germany";

//using .toUpperCase()
console.log("country".toUpperCase());    // OUTPUT - GERMANY                            
//using .toLowercase()
console.log('country'.toLowerCase());     // OUTPUT- germany
//using.slice()
console.log(country.slice(2));  // OUTPUT- rmany
//replace()
var newcountry = 'Japan';
console.log(newcountry.replace('Japan','China'));
//OUTPUT: China

//Concat()

let name1 = 'Jacob';
let name2 = '\nJackson';
let fullname = name1.concat(name2,' micheal ');  //we can use + operator also
//'surname' is added at end of first name

console.log(fullname);


// .trim() - removes whitespaces

var animal = '         Moneky    ';
console.log(animal.trim())



// Since strings are immutabl. Inorder to access the
//characters inside it, we need to convert them into array using split method or charAt method.

let fruits = 'Pineapple';

console.log(fruits[0]) //Since P is the first indx so it prints P.

console.log(fruits[1]) //prints i

console.log(fruits[6]) // prints P