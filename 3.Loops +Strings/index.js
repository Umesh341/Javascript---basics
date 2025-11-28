// for loop
// let sum = 0;
// for (let i = 1; i <= 500; i++) {
//     sum += i;
// }
// console.log("Sum of numbers from 1 to 500 is: " + sum);

//While loop
// let sum = 0;
// let i = 1;
// while (i <= 500) {       
//     sum += i;
//     i++;
// }
// console.log("Sum of numbers from 1 to 500 is: " + sum);

// Do-While loop
// let sum = 0;
// let i = 1;
// do {
//     sum += i;
//     i++;
// } while (i <= 500);
// console.log("Sum of numbers from 1 to 500 is: " + sum);

// For...in loop
// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// //for...of loop
// let string = "Hello";
// for (let char of string) {
//     console.log(char);
// }

//printing even no from 0 to 100
// for(let i=0; i< 101 ; i++){
//     if(!(i%2)){
//         console.log("even no : ", i)
//     }
// }
  


// Strings

let str = "Hello World";

// Inbuilt methods
console.log("Length of the string:", str.length); // 11
console.log("Character at index 2:", str.charAt(2));  // l
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0,3):", str.substring(0, 3)); // Hel
console.log("Index of 'World':", str.indexOf("World"));  // 6
console.log("Replace 'Hello' with 'Hi':", str.replace("Hello", "Hi"));  // Hi World
console.log("Concatenate with ' World':", str.concat(" World")); // Hello World World
console.log("Trimmed string:", "   Hello   ".trim()); // "Hello"
console.log("Split by 'e':", str.split("e")); // [ 'H', 'llo World' ]

// Template Literals    
let name = "John";
let age = 30;
console.log(`My name is ${name} and \n I am ${age} years old.`);

let multiLineStr = `Th\nat`;
console.log(multiLineStr.length); // 5


let str1= "hello"
str1[0]= "a";
console.log(str1) //strings are immutable in js, so output will be hello