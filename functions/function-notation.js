/*
There are multiple ways to declare a function
*/

/**
 * Function Expression (Using const)
 * Function is not hoisted so it cannot be called before it is declared
 * Use this form of declaration when a function is be to store in bidning or useful to pass it as argument
 */
const functionName = function(parameters) {
    console.log('These are function', parameters);
}

/**
 * Function Declaration
 * Function is hoisted so it can be called even before declaration
 * Use this when order of code is not important or to be restricted
 */
function functionName(parameters){
    console.log('These are function', parameters);
}

/**
 * Arrow function
 * Not hoisted so cannot be called before decalred
 * Arrow functions do not have prototype and hence cannot be used in a constructor
 * Use for callbacks, or inside methods like .map(),.filter()., etc
 * If the arrow function only have one parameter () and {} are not mandatory 
 */
const functionName = (parameters) => {
    console.log('These are function', parameters);
}

/**
 * All the function parameters are optional at all times, if the parameters are not
 * passed it is considered as undefined
 * All the above three functions if called as functionName() will give the output as
 * These are function undefined or These are function NaN
 */