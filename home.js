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

// Strings in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(moreFruits); // \n moves the content to a new line

console.log(fruit.length); // gives the number of characters
console.log(fruit.indexOf('an')); // finds an index of given characters
console.log(fruit.slice(2,6)); // provides the data within the given values
console.log(fruit.replace('ban', '123')); // replace
console.log(fruit.toUpperCase()); // capitalizes
console.log(fruit.toLowerCase()); // lower case
console.log(fruit.charAt(2)); // gives character at given position
console.log(fruit[2]); // same as charAt
console.log(fruit.split('')) // splits by given character '' will split all characters

// Arrays
let fruits = ['apple', 'banana', 'orange', 'pineapples'];
fruits = new Array ('apple', 'banana', 'orange', 'pineapples'); // also an array just different method

console.log(fruits[2]); // access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString()); // convert array to string and print
console.log(fruits.join(' - ')); // joins each of the values in the array with a given character
console.log(fruits, fruits.pop(), fruits); // prints array, removes last item, prints array
console.log(fruits, fruits.push('pineapples'), fruits); // prints array, adds item, prints array
console.log(fruits[3]); // prints value at 3rd
fruits[3] = 'mango'; // same as push
console.log (fruits)
console.log(fruits.shift());  // remove first element from an array
console.log(fruits);
console.log(fruits.unshift('apple')); // add first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5,10,2,49,85,733,900];
console.log(someNumbers.sort(function (a, b) {return a-b})); // sort ascending order
console.log(someNumbers.sort(function (a, b) {return b-a})); // sort descending order

let emptyArray = new Array ();
for (let num = 0; num <=10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray)

// objects in Javascript
// also known as dictionaries in Python

student = {
    first: 'John', 
    last: 'doe', 
    age: '29', 
    height: "6'",
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

console.log(student.first);
console.log(student.last);
student.first = 'Jane'; // change value
student.age++;
console.log(student.age);
console.log(student.studentInfo());
console.log(student.height);

// Conditionals, Control Flows (if else)
// 19-35 is my target demographic
// && AND
// || OR

var age = '45' // prompt('What is your age'); //var is used whenever a prompt is going to be used
if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

// Switch statements
// Differentiate between weekday vs weekend
// day 0 --> Sunday
// day 6 --> Saturday
// day 4 --> Thursday --> weekday

switch (6) {
    case 0:
        Text = 'weekend';
        break;
    case 5:
        Text = 'weekend';
        break;
    case 6:
        Text = 'weekend';
        break;
    default:
        Text = 'weekday';
}

console.log(Text);