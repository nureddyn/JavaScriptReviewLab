// =========================
// I. Variables & Datatypes
// =========================

// A. Q + A
/*
1. How do we assign a value to a variable? 
A. If it is a new variable, we can use the "let" or "const" keyword with the variable name, then the assignment "=" operator
and finally, the value that you want to reference.

2. How do we change the value of a variable? 
A. After being defined, there are several ways to change the value of a variable:
- If we want to assign another value to the current variable, it can be done with the "=" operator.
- If we want to add some value to the current variable, it can be done With the "+=" operator.
- If we want to substract some value to the current variable, it can be done With the "-=" operator.

3. How do we assign an existing variable to a new variable? 
A. On the left side, we write the variable which value we want to change, then the assignment "=" operator, and on the right
the existing variable name.

4. Remind me, what are 'declare', 'assign', and 'define'?
A. 
- Declaring is when we create a variable name, using the 'let', 'var', or 'const' keywords, but not assigning any value to it.
- Assign is when, after declared a variable, we reference an existing value from it.
- Defining is when we declare a variable, and assign a new value to it at the same time.

5. What is pseudocoding and why should you do it?
A. Pseudocoding is the process in which a programmer make explicit, in plain text or some general and agnostic language, their
intention about the code or task they are going to perform in any specific programming language.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
A. It can be 70% thinking and dividing the problem in a more atomic form and figuring out solutions, and 30% typing in code. 
*/


// B. Strings
// 1. Create a variable called firstVariable
let firstVariable;
// 2. Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// 3. Change the value of this variable to some number
firstVariable = 1;
// 4. Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// 5. Change the value of secondVariable to any string.
secondVariable = "dlorW olleH";
// 6. What is the value of firstVariable?
// A. 1.
/* 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string
"Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. 
*/
let yourName = "Nureddyn Ballout";

let expression = () =>{
    return `Hello, my name is ${yourName}`;
}


// C. Booleans
/* 1. Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
*/
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c !== d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false || !false);
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// D. The farm
// 1. Declare a variable animal. Set it to be either "cow" or something else
let animal = "chicken";
if (animal === "cow") console.log("mooooo");
else console.log("Hey! You're not a cow.");

// E. Driver's Ed
// 1. Make a variable that holds a person's age; be semantic
let personAge = 20;

/*2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16,
a message should print "Sorry, you're too young."*/
if (personAge >= 16) console.log("Here are the keys!")
else console.log("Sorry, you're too young.");

