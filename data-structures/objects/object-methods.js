/**
 * Just like arrays, objects also have in built methods that help controlling the object easier
 */

let sandwich = {
    cookType: 'grilled',
    temperature: 'medium rare',
    ingredients: ['tomatoes','lettuce','onions','ketchup','mayo']
}

/**
 * In the above object if we were to access all the keys of sandwich as an array
 */
Object.keys(sandwich)
//ouput: ['cookType', 'temperature', 'ingredients']

/**
 * In the above object if we were to access all the values of sandwich as an array
 */
Object.values(sandwich)
//output: ["grilled","medium rare",["tomatoes","lettuce","onions","ketchup","mayo"]]

/**
 * deleting a property inside the object
 */
delete sandwich.cookType;
//output: when the above statement is executed the output is a boolean 'true'
/**
 * Unfortunately deleting a property always returns true as javascript never check whether the property is part of the object or not.
 * Only case where delete return false is when we define a property that is non-configurable, below is the example
 */

//lets add a non-configurable property cookType back to the sandwich
Object.defineProperty(sandwich, 'cookType',{
    value: 'grilled',
    configurable: false //property cannot be deleted
})

//Now if we run
delete sandwich.cookType //output: false, as the property is non-configurable and the object and its prooperty stays intact.

/**
 * Assigning values to property inside the object
 */
Object.assign(sandwich, {
    temperature: 'rare'
})
/*
output for sandwich will be

{
    cookType: 'grilled',
    temperature: 'rare',
    ingredients: ['tomatoes','lettuce','onions','ketchup','mayo']
}

*/

/**
 * Running the same assignment on cookType will error out as cookType is now a non-configurable property
 */



/**
 * Object reference is not same as object preoperty assignment
 */
let objectOne = {
    testOne: 25
};
let objectTwo = objectOne;
let objectThree = {
    testOne: 25
}

/*
In the above declarations we have three objects, we are objectTwo is referencing directly to objectOne
so, comparing objectOne and objectTwo will yield the result as true
*/
objectOne == objectTwo //true

/*
On the other hand objectThree have the same properties as objectOne and same value as objectOne as well
however comparing these two will always result in false
*/
objectOne == objectThree //false

/**
 * Changing any property or value in objectOne automatically changes the same property and value in objectTwo as
 * they both are directly referenced.
 * ObjectThree on the other hand have different life so any change in objectOne will not affect objectThree
 */