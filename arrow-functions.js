/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addtwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addtwoNumbers(3, 5)
// console.log(sum)
// Arrow Function With Parameters
const addtwoNumbers =(a, b) => {
    // Code block
    return a + b;
}
let sum = addtwoNumbers(3, 5)
console.log(sum)
// Single Line Arrow Function With Parameters

const addtwoNumbers2 = (a, b) => a + b;
let sum2 = addtwoNumbers2(6, 4);
console.log(sum2);
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!!');

const sayHello = () => console.log('hello');
sayHello();
// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        this is a multiline string!
    </p>`
)
console.log(returnMultipleLines());