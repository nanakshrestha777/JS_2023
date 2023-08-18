//LOOPS
//helps us to automate such tasks

//                        Types of loops

/*
          
        1.  for loop - used when you know the number of times you want to repeat a block of code.

            SYNTAX:
            for (initialization; condition; increment/decrement) {
                // code to be executed
            }

            //
            Initialization: It sets the initial value before the loop starts.
            Condition: It defines the condition to continue or stop the loop.
            Increment/Decrement: It updates the loop variable after each iteration.
            //

      
*/

//write a sample for loops of you choice.

for (var i = 1; i <= 5; i++) {
    console.log(i);
}


/*
2.  for - in loops
Syntax : For In Loop is used to iterate over an array, string etc., and it returns 
or can say ilerate over the properties of an object.

    for (key in object) {
        statement;
    }

    variable / Key: A variable that will be assigned to each enumerable property of the object on each iteration.
    object: The object whose properties you want to iterate over.

*/

//write a sample program demostrating for-in loops.

const person = {
    name: 'Nanak SHrestha',
    age:30,
    gender:'male',
};

for (let key in person) {
    console.log(key + ' = ', person[key])
}



/*
3. for-of loops
Syntax : The for...of loop iterates through all values of any iterable objects such as arrays, strings, maps, sets, and more.

    for (variable of iterable) {
        statements;
    }

    variable: A variable that will be assigned to each element of the iterable on each iteration.
    iterable: The iterable object you want to loop through.





*/


// Write a sample program demonstrating for-of loops.

const numbers = [1,2,3,4,5];

for (let number of numbers) {
    console.log(number);
}


// Example looping through a String

const message = 'Hello Dear';

for (let character of message) {
    console.log(character);
}


/*
4. While loops
Syntax : used to repeatedly execute a block of code as long as specified condition is true.

        while (condition) {
            //statement
        }

        condition: A condition that is evaluated before each iteration. 
        If the condition is true, the code block is executed. If the condition becomes false, the loop is terminated.

*/

let count = 0;

while (count < 5) {
    console.log( ' count: ' + count);
    count++;
}

