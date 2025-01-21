/**
 * A function that references bindings from local scopes around it is called a closure.
 */

function divide(divisor){
    return number => number/divisor; 
}

let quotient = divide(2)
console.log(quotient(4))

//ouput --> 2

/**
 * Initial divide(2) sets the value of divisor in memory but returns number/divisor
 * on quotient(4) the number is injected and divided by divisor leaving the quotient 2
 * the number declare is actually a input parameter of a function, however when using arrow functions one need not have the parameter enclosed in () it its only one
 */

