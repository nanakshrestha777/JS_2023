// write a java script  program to store name, phone number and marks of a student using objects.

const information = {
    name : 'Nanak Shrestha',
    Phone_number : 9808270083,
    Marks: [1546]
}
console.log(information)
console.log(information.name)
console.log(information.Marks)
console.log(information.Phone_number)

console.log('NEwline')
// converting into JSON file 
console.log(JSON.stringify(information))

