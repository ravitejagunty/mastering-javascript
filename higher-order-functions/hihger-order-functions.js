/**
 * A function that operates on other function either by taking them as arguments or returning them
 */

function lessThan(number) {
    return less => less < number
}

let isNumberless = lessThan(10);
console.log(isNumberless(9));
//output: true

/**
 * example of an array which uses forEach to print values
 */

['a','b','c','d'].forEach(value => console.log(value));
//outputs: a b c d 
/**
 * Internally forEach is doing the following, it is taking the given array as input and performing a for loop
 * for (i=0; i<['a','b','c','d'].length;i++){
 * console.log(array[i]);
 * }
 * but the internal implementation is hidden to user.
 */

/**
 * Lets looks at filter hof(higher order function)
 */
function filter(array, condition){
    let passedCondition = [];
    for(let element of array){
        if(condition(element)){
            passedCondition.push(element);
        }
    }
    return passedCondition;
}

let inputArray = [1,5,6,89,23,91,123];

let result = filter(inputArray, inputElement => inputElement > 7)
console.log(result)

//output: [89,23,91,123]

/**
 * Real world usage of this filter function is more like below
 */
inputArray.filter(inputElement => inputElement > 7) //much simplified

/**
 * Map function in arrays
 * creates a new array with the transform condition applied
 */
function map(array, transform){
    let transformedArray = []
    for(let element of array){
        transformedArray.push(transform(element));
    }
    return transformedArray;
}

let inputArray = [
    {
        name: 'javascript',
        age: 30
    },
    {
        name: 'java',
        age: 25
    },
    {
        name: 'python',
        age: 20
    }
];

map(inputArray, extractName => extractName.name);

//output: ['javascript', 'java', 'python']

/**
 * real world use
 */
inputArray.map(extractName => extractName.name)
//output: ['javascript', 'java', 'python']


/**
 * reduce function for array
 * reduces the entire array into a single value
 * syntax: reduce(callBackFunc, initialValue)
 */
let inputArray = [1,2,3,4,6,78,352,214234]
inputArray.reduce((a,b) => a+b, 0)
//output: 214680, adds the element start from 0 and iterated through the loop to generate single sum value.

/**
 * Some of the string hof's
 * Both charCodeAt and codePointAt gives the unit code of the char in the string
 */
let name = 'mastering javascript'
name.charCodeAt(/*take input argument as number*/);
name.codePointAt(/*take input argument as number*/);

