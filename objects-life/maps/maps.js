/**
 * Unlike map that we have seen earlier map is also a data structure in javascript that is associated with keys and values
 * In the below object we are mapping key as programming language name to age
 * property names are programming language names and property values are the ages 
 */

let programming = {
    javascript: 25,
    java: 20,
    python: 18
}

console.log(`Javascript age is ${programming['javascript']}`);
//output: Javascript age is 25

/**
 * It is unsafe to use plains objects as maps as it will have prototype property by default
 * to create a map without Object.prototype we just need to create the Object with Object.create(null)
 */

/**
 * Map class in javascript is used to create the mappings and it takes any value as keys avoiding the conflict between
 * class properties which must be strings
 */

let programming = new Map()
programming.set('javascript', 25);
programming.set('java',20);

console.log(`Java age is ${programming.get('java')}`);
// Java age is 20
console.log(`is java age defined?, ${programming.has('java')}`);
// is java age defined?, true
console.log(`${programming.has('python')}`);
// false

/**
 * set, get and has are methods of object Map that are exposed via interface
 */