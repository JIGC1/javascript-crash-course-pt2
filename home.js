console.log('hello');

// alert('hello this is JIGC');

// How to write a comment inline

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// Manipulate DOM with Javascript
/*... is just a fancy way of saying change HTML with Javascript 
var age = prompt('What is your age?');

document.getElementById('h1').innerHTML = age;
*/

// numbers in javascript
var num1 = 5.7;
console.log(num1);
console.log(1993/29); //division
// increment
num1 = num1 + 1; // can also do num1++;

//decrement
num1 = num1 - 1; // can also do num1--;

console.log(num1);

// divide, multiply *, remainder %
console.log(num1 % 3);

// increment/decrement by any number you want
num1 += 10;
console.log(num1);

/* functions
1. Create a function
2. Call a function
*/

// Create
function fun() {
    console.log('this is a function')
}

// Call
fun();

/* Let's create a function that takes in a name and says hello followed by your name

for example;

Name: 'JIGC'
Return: 'Hello JIGC'

*/

function greeting() {
    var result = 'hello' + " " + name; // String Concatenation
    console.log(result);
}

// var name = prompt('What is your name?');
// greeting(name);

// How do arguments work in functions?
// How do we add two numbers together in a function?

function sumNumbers (num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

/* While loops
var num = 0;
while (num < 100) {
    num += 1;
    console.log(num);
}

*/

// For loops
for (let num = 0; num < 100; num++){
    console.log(num);
}

// Data types
let yourAge = 18; // number
let yourName = 'Bob'; // String
let name = {first: 'Jane', last: 'Doe'}; //object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // Array
let random; // undefine
let nothing = null; // value null
