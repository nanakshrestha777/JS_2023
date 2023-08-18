//Arrays
/*Arrays are Variablees which can hold mroe than one value. */
const Animals = ['Dog','Cow','Cat','Lion'];

//OR can be of different Types...

const A = [7,"NANAK",true];

console.log(Array.isArray(A)); //OUTPUT - True

//Accessing Values:

var numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers[0]);
//Output-  1

console.log(numbers[4]);
//Output- 5

/*negative indexing is not a built-in feature.*/


//Finding the lengh
console.log(numbers.length);

//changing the Value

numbers[0]=12;
console.log(numbers);

//numbers now becomes   12, 2, 3, 4, 5, 6, 7, 8, 9. Arrays are mutable and can be changed.


//Arrays Method

//There are some important array method in JavaScript.Some of them are as follows:

//1. toString() converst  an array to a stringn of comma separated values.

let num = [1,2,3];

console.log(num);
var n = num.toString();
console.log(n);

let type = typeof n;

console.log(type); //Output: string


//2. join() joins all the array elements using a separatr=or.

let x = [1,2,3,4];
console.log(x.join('/'));




//3. pop() removes last element from the array.

console.log(x.pop());
// you can see in this array [1,2,3,4] 4 is the last element and the output caused byusing pop() is 4.

//4. push() adds a new element at the end of the array.
let y = [1,2,3];

console.log(y.push(12)) ;//modifies the original array return the new array length output- 4
console.log(y);// Now the output - [ 1, 2, 3, 12 ]


//5. Shift() removes first element and returns it.

let nums = [1,3,2,5,];

console.log(nums.shift()); //output - 1
console.log(nums)   //now the output will be [3,2,5]. removes first element and return it.

//6. unshift() Add element to the beginning and returns new array length.


const p = [1,2,3,4,5];
console.log('unshift',p.unshift(-9)); // return new array lenght before was 5 now new after adding-9 length is 6.
console.log(p); //output - [ -9, 1, 2, 3, 4, 5 ]

//7. delete will delete usingthe delete operator..

let d = [0,1,2,3];
console.log('before deleting',d ); //before deleting [ 0, 1, 2, 3 ]

console.log('After deleting', delete d[0]);//  return true becuase the element at index 0 is successfullydeletedfrom the array d.


console.log(d);//[ <1 empty item>, 1, 2, 3 ]


//8. concat() used to  join arrays to the given array.
var arr=[1,2],arr1=[3,4],arr2=[5,6];
console.log("Before Concatenation",arr+"," +arr1+ "," +arr2 );// Before Concatenation 1,2,3,4,5,6
/// Before Concatenation ,1,2,,3,4,,,5,6
console.log(arr.concat(arr1,arr2));
//[ 1, 2, 3, 4, 5, 6 ] returns new array doesnot change existing arrays.


//9. Sort() method is  used to sort an array   ALPHABETICALLY.

let c = ['b','c','y','u','o'];
console.log('SOrted', c.sort());  //SOrted [ 'b', 'c', 'o', 'u', 'y' ]modifies the orginal arrays.


// 10. splice() splice can be used to add new items to an array.

// It takes three parameters start index,delete count & value to insert in that position.
const number = [1,23,346,56,234];
console.log(number.splice(2,2));



//11. slice() slices out a piece from an array which creates a new array.


const z = [1,2,3,4,5];

console.log(z.slice(1,3)); //extracts elements from index 1 up to, but not including, index 3. 
//output - [2,3]
console.log(z.slice(2));  //output - [ 3, 4, 5 ] extracts elements from after index 2.

//12. reverse() reverse the elements in the source arrays.


var fruits = ['apple','mango','orange','pine-apple'];
console.log('Reverse Array:' ,fruits.reverse()); //output- Reverse Array: [ 'pine-apple', 'orange', 'mango', 'apple' ]




/*Looping through Arrays */

//Looping through arrays is a common task in programming and it allows you to perform operations on each element of the array.
//several ways to loop through in JavaScript.



// 1. For Each loop -- calls a function, once for each array element.?

const aa= [1,2,3,4,5];
aa.forEach(function(element){
    console.log(`Element`,element);
}); 

//2. map()  creates  a  new array by performing some operation on each array element.

const mapping = [1,2,3,4,5];
mapping.map(function(item){
    console.log('Mapped: ', item)
});

//3. filter() filters an array with values that passes a test. creates a new array.


const app = [1, 2, 3, 4, 5];
const filteredArray = app.filter(function(element) {
  // Test condition
  return element > 2;
});

console.log(filteredArray);

//Output: [ 3, 4, 5 ]


//4. reduce method()-- reudces an array to a single value.
const numb = [3, 4, 67, 89, 45];
let sum = numb.reduce(function(acc, curr) {
  return acc + curr;
});

console.log(sum);



//5. Array from  which is used to create an array from ay other object.

//Converting a string to an array:
const str = 'Hello';
const arrs = Array.from(str);

console.log(arrs);
// Output: ['H', 'e', 'l', 'l', 'o']

//Converting a Set to an array:
const set = new Set([1, 2, 3]);
const arra = Array.from(set);

console.log(arra);
// Output: [1, 2, 3]

//Mapping and transforming elements during conversion:
const numbe = [1, 2, 3, 4, 5];
const squaredNumbers = Array.from(numbe, x => x * x);

console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]


//6. for..of can be used to get the values from an array.
const ar = [1, 2, 3, 4, 5];

for (const element of ar) {
  console.log(element);
}

// Output:
// 1
// 2
// 3
// 4
// 5
//7. for.. in loops can be used to get the keys from an array.

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
}

// Output:
// a 1
// b 2
// c 3