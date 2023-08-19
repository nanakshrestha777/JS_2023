//loops exercises




// 1.
//write a program to print the marks of a student in an object using for loops.?
//obj = { nanak - 98 , john = 65, Thanos - 56}

obj = {'nanak': 98, 'john': 65,'Thanos': 56};

for (key in obj){
  console.log(key ,'=', obj)
}

// 2.

// Write the program in no.1 using for in loops.



const list = [{
    nanak : 98,
    john:  65,
    Thanos: 56,
}];


for (let obj in list){
    console.log(obj, '=', list);
}



// 3.
// write a program to print "Try again" until the user enters the correct number.?

// let number = 0;

// while (number != 5) {
//   console.log("Try again");
//   number = Number(prompt("Enter a number:"));
// }

// console.log("You entered the correct number!");


// const correctNumber = 42; // Change this to the desired correct number
// let userInput;

// do {
//   userInput = prompt("Enter a number:");
//   if (Number(userInput) === correctNumber) {
//     console.log("Congratulations! You entered the correct number.");
//     break;
//   } else {
//     console.log("Try again.");
//   }
// } while (true);


// Write a function to find mean of 5 numebrs.



let num = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i < num.length; i++){
  sum += num[i]

}
let mean = sum / num.length;
console.log(mean);



//exampe 2

let numbers = [1,2,3,4,5,6,7,8,9,10]
let add = 0;

for (let i = 0; i < numbers.length; i++) {
  add += numbers[i]

}
let means = add / numbers.length;

console.log('The average mean is- ', means);



