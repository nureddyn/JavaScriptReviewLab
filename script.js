// // =========================
// // I. Variables & Datatypes
// // =========================

// // A. Q + A
// /*
// 1. How do we assign a value to a variable?
// A. If it is a new variable, we can use the "let" or "const" keyword with the variable name, then the assignment "=" operator
// and finally, the value that you want to reference.

// 2. How do we change the value of a variable?
// A. After being defined, there are several ways to change the value of a variable:
// - If we want to assign another value to the current variable, it can be done with the "=" operator.
// - If we want to add some value to the current variable, it can be done With the "+=" operator.
// - If we want to substract some value to the current variable, it can be done With the "-=" operator.

// 3. How do we assign an existing variable to a new variable?
// A. On the left side, we write the variable which value we want to change, then the assignment "=" operator, and on the right
// the existing variable name.

// 4. Remind me, what are 'declare', 'assign', and 'define'?
// A.
// - Declaring is when we create a variable name, using the 'let', 'var', or 'const' keywords, but not assigning any value to it.
// - Assign is when, after declared a variable, we reference an existing value from it.
// - Defining is when we declare a variable, and assign a new value to it at the same time.

// 5. What is pseudocoding and why should you do it?
// A. Pseudocoding is the process in which a programmer make explicit, in plain text or some general and agnostic language, their
// intention about the code or task they are going to perform in any specific programming language.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// A. It can be 70% thinking and dividing the problem in a more atomic form and figuring out solutions, and 30% typing in code.
// */


// // B. Strings
// // 1. Create a variable called firstVariable
// let firstVariable;
// // 2. Assign it the value of the string "Hello World"
// firstVariable = "Hello World";
// // 3. Change the value of this variable to some number
// firstVariable = 1;
// // 4. Store the value of firstVariable in a new variable called secondVariable
// let secondVariable = firstVariable;
// // 5. Change the value of secondVariable to any string.
// secondVariable = "dlorW olleH";
// // 6. What is the value of firstVariable?
// // A. 1.
// /* 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string
// "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// */
// let yourName = "Nureddyn Ballout";

// let expression = () =>{
//     return `Hello, my name is ${yourName}`;
// }


// // C. Booleans
// /* 1. Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
// */
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c !== d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false || !false);
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48');

// // D. The farm
// // 1. Declare a variable animal. Set it to be either "cow" or something else
// let animal = "chicken";
// if (animal === "cow") console.log("mooooo");
// else console.log("Hey! You're not a cow.");

// // E. Driver's Ed
// // 1. Make a variable that holds a person's age; be semantic
// let personAge = 20;

// /*2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16,
// a message should print "Sorry, you're too young."*/
// if (personAge >= 16) console.log("Here are the keys!")
// else console.log("Sorry, you're too young.");

// // II. Loops
// // A. The basics
// // 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
// for (let i = 0; i <= 10; i++) console.log(i);

// // 2. Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i = 0; i <= 400; i++) console.log(i);

// // 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for (let i = 12; i <= 4000; i+=3) console.log(i);

// // B. Get even
// // 1. Print out the numbers that are within the range of 1 - 100
// //for (let i = 1; i <= 100; i++) console.log(i);

// // 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) console.log(`${i} <-- is an even number`);
//     else console.log(i);
// }

// // C. Give me Five
// // 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for (let number = 0; number <=100; number++) {
//     if (number % 5 === 0) console.log(`I found a ${number}. High five!`);
// }

// // 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// for (let number = 0; number <=100; number++) {
//     if (number % 5 === 0) console.log(`I found a ${number}. High five!`);
//     else if (number % 3 === 0) console.log(`I found a ${number}. Three is a crowd`);
// }


// // 3. For numbers divisible by both three and five, be sure your code prints both messages
// for (let number = 0; number <=100; number++) {
//     if (number % 5 === 0) console.log(`I found a ${number}. High five!`);
//     else if (number % 3 === 0) console.log(`I found a ${number}. Three is a crowd`);
//     else if (number % 3 === 0 && number % 5 === 0) {
//         console.log(`I found a ${number}. Three is a crowd`);
//         console.log(`I found a ${number}. High five!`);
//     }
// }

// // D. Saving account
// // 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account
// let bank_account = 0;
// for (let n = 1; n <= 10; n++) bank_account+=n;

// // Check your work! Your bank_account should have $55 in it.
// console.log(bank_account);

// /* 3. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100
// multiplied by 2.*/
// bank_account = 0;
// for (let n = 1; n <= 100; n++) bank_account+=n*2;

// // Check your work! Your bank_account should have $10,100 in it.
// console.log(bank_account);

// /// III. Arrays & Control flow
// // a. Talk about it:
// // 1. What are the things in an array called?
// // A. There are values and indices.

// // 2. Do Arrays guarantee those things will be in order?
// // a. Each index is in order, but the values may or may not be in order.

// // 3. What real-life thing could you model with an array?
// /*a. We can model sequences, vectors, lists of all kinds, the alphabet, we can group things that relate to each other. In general,
// things that have any kind of order.
// */
// // B. Easy Does It
// // 1. Create an array that contains three quotes and store it in a variable called quotes
// const quotes = [
//     "Three can keep a secret, if two of them are dead.",
//     "To be or not to be, that is the question.",
//     "To err is human; to forgive, divine."
// ]

// // Given the following array:
// const randomThings = [1, 10, "Hello", true];

// // 1. How do you access the 1st element in the array?
// randomThings[0];

// // 2. Change the value of "Hello" to "World"
// randomThings[2] = "World";

// // 3. Check the value of the array to make sure it updated the array. How? Why, yes!
// console.log(randomThings);

// // D. Change values
// // Given the following array:
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// // 1. What would you write to access the 3rd element of the array?
// ourClass[2];
// // 2. Change the value of "Github" to "Octocat"
// ourClass[4] = "Octocat";
// // 3. Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City");

// // E. Mix It Up
// /*
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// */
// // Given the following array:
// const myArray = [5, 10, 500, 20];

// // 1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon", "Baelon");

// // 2. Remove the 5 from the beginning of the array.
// myArray.shift();

// // 3. Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley");

// // 4 Remove the string of your choice from the end of the array.
// myArray.pop();

// /*5 Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean?
// Did the .reverse()method return anything?*/
// /*Yes, the array mutated. Mutate means the ability of a data type to change its value in memory.
// The .reverse() method returned the array flipped.
// */

// // F. Biggie Smalls
// // Create a variable that contains an integer.
// const number = 0;

// // Write an if ... else statement that:
// // 1. console.log()s "little number" if the number is entered is less than 100
// if (number < 100) console.log("little number");

// // 2. console.log()s big number if the number is greater than or equal to 100.
// else console.log("big number");

// // G. Monkey in the Middle
// // Write an if ... else if ... else statement:
// const number2 = 6;

// // 1. console.log() little number if the number entered is less than 5.
// if (number2 < 5) console.log("little number");

// // 2. If the number entered is more than 10, log big number.
// else if (number2 > 10) console.log("big number");

// // 3. Otherwise, log "monkey".
// else console.log("monkey");

// // H. What's in Your Closet?
// // Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

//   // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
// ];

//   /*
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
//  log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// */
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);

// // 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, "raybans");

// // 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// kristynsCloset[5] = "stained knit hat";

// // 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// const shirt = thomsCloset[0][0];

// // 5. In the same way, access one item from Thom's pants array.
// const pants = thomsCloset[1][1];

// // 6. Access one item from Thom's accessories array.
// const accessorie = thomsCloset[2][1];

// // 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${accessorie}!`);

// // 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = "Footie Pajamas";

// // IV. Functions
// // B. printCool

// /*
// Write a function printCool that accepts one parameter, name as an argument. The function should print
// the name and a message saying that that person is cool.
// */
// function printCool(name) {
//     return `${name} is Cool`;
// }
// console.log(printCool("Captain Reynolds"));

// // C. calculateCube
// // Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// function calculateCube(number) {
//     return number**3;
// }
// console.log(calculateCube(5));

// // D isVowel
// /*
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general,
// when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// */
// function isVowel(char) {
//     vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.includes(char.toLowerCase())) return true;
//     return false;
// }
// console.log(isVowel('A'));

// // E. getTwoLengths
// /*
// Write a function getTwoLengths that accepts two parameters (strings). The function should return
// an array of numbers where each number is the length of the corresponding string.
// */
// function getTwoLengths (str1, str2) {
//     let result = [];
//     result.push(str1.length, str2.length);
//     return result;
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// // F. getMultipleLengths
// /*
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings.
// The function should return an array of numbers where each number is the length of the corresponding string.
// */
// function getMultipleLengths(arr) {
//     let result = [];
//     arr.forEach(string => {
//         result.push(string.length);
//     });
//     return result;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// // H.  printLongestWord
// /*
// Write a function printLongestWord that accepts a single argument, an array of strings.
// The method should return the longest word in the array. In case of a tie, the method
// should return the word that appears first in the array.
// */
// function printLongestWord(strings) {
//     let longestWord;
//     let sorted = false;
//     let tmp;
//     while (sorted === false) {
//         sorted = true;
//         for (let left_index = 0; left_index < strings.length - 1; left_index++) {
//             for (let right_index = left_index + 1; right_index < strings.length; right_index++) {
//                 if (strings[left_index].length < strings[right_index].length) {
//                     tmp = strings[left_index];
//                     strings[left_index] = strings[right_index];
//                     strings[right_index] = tmp;
//                     sorted = false;
//                 }
//             }
//         }
//     }
//     longestWord = strings[0];
//     return longestWord;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// V. Objects
/*
Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website,
and we want to store that user's data. The object data structure is a good way to organize the data from our user.
*/
// A. Make a user object
// 1. Create an object called user.
/* 2. Write in to the object the key-value pairs for name, email, age, and purchased.
Set the value of purchased to an empty array []. Set the other values to whatever you would like.
// */
// const user = {
//     name: "Juanito Alimaña",
//     email: "juanito@gmail.com",
//     age: 26,
//     purchased:[],
// };

// // B. Update the user
// /* 1. Our user has changed his or her email address. Without changing the original user object, update the email value
// to a new email address.
// */
// user.email = "alimaña@gmail.com";

// /* 2. Our user has had a birthday! Without changing the original user object, increment the age value
// using the postfix operator. Hint: age++
// */
// user.age++;

// // C. Adding keys and values
// // You have decided to add your user's location to the data that you want to collect.
// /* 1. Without changing the original user object, add a new key location to the object, and give it a value
// or some-or-other location (a string).
// */
// user.location = "Guallama, Puerto Rico";

// // D. Shopaholic!
// /* 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates"
// to the purchased array.*/
// user.purchased.push("carbohydrates");

// /* 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind"
// to the purchased array.*/
// user.purchased.push("peace of mind");

// /* 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs"
// to the purchased array.*/
// user.purchased.push("Merino jodhpurs");

// /* 4. Console.log just the "Merino jodhpurs" from the purchased array.*/
// console.log(user.purchased[2]);

// // E. Object-within-object
// // 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// user.friend = {
//     name: "Pepito",
//     age: 31,
//     location: "San Juan Puerto Rico",
//     purchased: []
// };

// // 2. Console.log just the friend's name
// console.log(user.friend.name);

// // 3. Console.log just the friend's location
// console.log(user.friend.location);

// // 4. CHANGE the friend's age to 55
// user.friend.age = 55;

// // 5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
// user.friend.purchased.push("The One Ring");

// // 6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.
// user.friend.purchased.push("A latte");

// // 7. Console.log just "A latte" from the friend's purchased array.
// console.log(user.friend.purchased[1]);

// // F. Loops
// /* 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array),
// and prints each element to the console.*/
// user.purchased.forEach((product) => {
//     console.log(product);
// });

// // 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
// user.friend.purchased.forEach((product) => {
//     console.log(product);
// });

// // G. Functions can operate on objects
// /* 1. Write a single function updateUser that takes no parameters.
// When the function is run, it should:
// - increment the user's age by 1
// - make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
// */
// function updateUser () {
//     user.age++;
//     user.name = user.name.toUpperCase();
// }
// updateUser();

// /* 2. Write a function oldAndLoud that performs the exact same tasks as updateUser,
// but instead of hard-coding it to only work on our user object, make it take a parameter person,
// and have it modify the object that is passed in as an argument when the function is called.
// Call your oldAndLoud function with user as the argument.*/
// function oldAndLoud(person) {
//     person.age++;
//     person.name = person.name.toUpperCase();
// }
// oldAndLoud(user);
