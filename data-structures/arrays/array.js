/**
 * Arrays are type of data structure in javascript
 * Array can be in form of numbers, strings, combination of numbers and string or even functions
 */

//Array of numbers
let numbersList = [2,3,9,10,14];
console.log("this is the second number in the array", numbersList[1]);
/**
 * Ouput: this is the second number in the array, 3
 * In general the index count of an array starts from 0 so the 0th position holds the value of first number in the array which is 2
 * and the 1st position holds the valye of second number which is 3
 */

//Array of strings
let stringsList = ["mastering","javascript","github","repo"];
console.log("this is the second string in the array", stringsList[1]);
/**
 * Same pattern follows even for the strings list, stringsList[1] will output the second string in the array which is:
 * this is the second string in the array, javascript
 */

//Array of functions
let functionsList = [
    function(){
        console.log("I'm the first function");
    },
    function(number){
        console.log ('Multiplication result of the number is:', number * number); 
    }
];
/**
 * functionsList[0] outputs: I'm the first function
 * functionsList[1](3) outputs: Multiplication result of the number is: 9, in the second function we have a parameter 'number' that need to be passed
 */

//Mixed array
let mixedList = [
    5,
    7,
    "javascript",
    function(){
        console.log('This is a function in mixed array')
    }
]; 
/**
 * functionsList[0] outputs: 5
 * functionsList[2] outputs: javascript
 * functionsList[3] ouputs: This is a function in mixed array
 */